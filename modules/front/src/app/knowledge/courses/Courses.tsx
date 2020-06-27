import React from "react";
import './courses.css';
import Search from "../../common/Search";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Course} from "../../../cuba/entities/tsadv/tsadv$Course";
import {collection, DataCollectionStore} from "@cuba-platform/react";
import defaultImgSrc from './course/course-min.png';
import CourseComponent from "./course/CourseComponent";
import {Form} from "antd";

@observer
class Courses extends React.Component {

  @observable coursesDcs: DataCollectionStore<Course> = collection<Course>(Course.NAME, {view: '_local', sort: 'name'});

  render() {
    const {items} = this.coursesDcs;
    return <div className={"courses-container"}>
      <div className={"courses-container-wrapper"}>
        <div className={"courses-container-content"}>
          <h1 className={"courses-container-header"}>курсы</h1>
          <hr/>
          <Search placeholder={"Введите название курса"}/>
          <div className={"course-items-container"}>
            <div className={"course-items"}>
              {items.map(course => (<CourseComponent course={course}/>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

function str2ab(str: string) {
  var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

function _arrayBufferToBase64(buffer: string): string {
  let binary = '';
  const bytes = new Uint8Array(str2ab(buffer));
  const len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export default Courses;