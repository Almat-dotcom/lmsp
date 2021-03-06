import { PersonGroup } from "./base$PersonGroup";
import { PersonExt } from "./base$PersonExt";
import { Retirement } from "./tsadv$Retirement";
import { Disability } from "./tsadv$Disability";
import { MilitaryForm } from "./tsadv$MilitaryForm";
import { CompetenceElement } from "./tsadv$CompetenceElement";
import { AssignmentExt } from "./base$AssignmentExt";
import { PersonContact } from "./tsadv$PersonContact";
import { PersonDocument } from "./tsadv$PersonDocument";
import { Assessment } from "./tsadv$Assessment";
import { PersonEducation } from "./tsadv$PersonEducation";
import { PersonExperience } from "./tsadv$PersonExperience";
import { PersonAttachment } from "./tsadv$PersonAttachment";
import { JobRequest } from "./tsadv$JobRequest";
import { SuccessionPlanning } from "./tsadv$SuccessionPlanning";
import { BusinessTrip } from "./tsadv$BusinessTrip";
import { Agreement } from "./tsadv$Agreement";
import { Dismissal } from "./tsadv$Dismissal";
import { Case } from "./tsadv$Case";
import { PersonReview } from "./tsadv$PersonReview";
import { Address } from "./tsadv$Address";
import { StudentGrant } from "./tsadv$StudentGrant";
import { ReLocation } from "./tsadv$ReLocation";
import { PersonExpectedSalary } from "./tsadv$PersonExpectedSalary";
import { Beneficiary } from "./tsadv$Beneficiary";
import { IndividualDevelopmentPlan } from "./tsadv$IndividualDevelopmentPlan";
import { Internship } from "./tsadv$Internship";
import { Enrollment } from "./tsadv$Enrollment";
import { Attestation } from "./tsadv$Attestation";
import { CandidateRequirement } from "./tsadv$CandidateRequirement";
export class PersonGroupExt extends PersonGroup {
  static NAME = "base$PersonGroupExt";
  list?: PersonExt[] | null;
  retirement?: Retirement[] | null;
  disability?: Disability[] | null;
  militaryRank?: MilitaryForm[] | null;
  person?: PersonExt | null;
  relevantPerson?: PersonExt | null;
  competenceElements?: CompetenceElement[] | null;
  assignments?: AssignmentExt[] | null;
  personContacts?: PersonContact[] | null;
  personDocuments?: PersonDocument[] | null;
  assessments?: Assessment[] | null;
  personEducation?: PersonEducation[] | null;
  personExperience?: PersonExperience[] | null;
  personAttachment?: PersonAttachment[] | null;
  jobRequests?: JobRequest[] | null;
  successionPlanning?: SuccessionPlanning[] | null;
  businessTrip?: BusinessTrip[] | null;
  agreements?: Agreement[] | null;
  dismissals?: Dismissal[] | null;
  cases?: Case[] | null;
  reviews?: PersonReview[] | null;
  likeCount?: any | null;
  disLikeCount?: any | null;
  addresses?: Address[] | null;
  studentGrants?: StudentGrant[] | null;
  relocation?: ReLocation[] | null;
  expectedSalary?: PersonExpectedSalary[] | null;
  linkedinAccessToken?: string | null;
  linkedinProfileLink?: string | null;
  linkedinTokenExpiresInDate?: any | null;
  beneficiary?: Beneficiary[] | null;
  individualDevelopmentPlan?: IndividualDevelopmentPlan[] | null;
  internship?: Internship[] | null;
  enrollment?: Enrollment[] | null;
  attestation?: Attestation[] | null;
  candidateRequirement?: CandidateRequirement[] | null;
  totalExperience?: any | null;
  personFioWithEmployeeNumber?: string | null;
  activeAssessment?: Assessment | null;
  currentAssignment?: AssignmentExt | null;
  currentAssignmentWithSuspendedAndTerminatedStatus?: AssignmentExt | null;
  currentAssignmentWithSuspendedStatus?: AssignmentExt | null;
  primaryAssignment?: AssignmentExt | null;
  fullName?: string | null;
  firstLastName?: string | null;
  fioWithEmployeeNumber?: string | null;
  personLatinFioWithEmployeeNumber?: string | null;
  personFirstLastNameLatin?: string | null;
}
export type PersonGroupExtViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "assignment.card.personGroup"
  | "person-group-ext-intern"
  | "personGroup-relevantPerson-fullNameCyrillic"
  | "personGroup-view"
  | "personGroup.add.reserve"
  | "personGroup.browse"
  | "personGroup.candidate"
  | "personGroup.contacts"
  | "personGroup.for.absences"
  | "personGroup.linkedin"
  | "personGroup.listInfo"
  | "personGroup.master"
  | "personGroup.noAssignment"
  | "personGroup.person.info"
  | "personGroup.scrum.competence"
  | "personGroup.search"
  | "personGroup.search.candidate"
  | "personGroup.with.positionGroup"
  | "personGroupBeneficiary"
  | "personGroupExt-absenceEdit"
  | "personGroupExt-for-search-candidate"
  | "personGroupExt-view"
  | "personGroupExt-view-for-requisition-edit"
  | "personGroupExt-view-for-selvservice-requisition"
  | "personGroupExt.for.enrollment.lookup"
  | "personGroupExt.for.requisition.edit"
  | "personGroupExt.for.requisition.optionDs"
  | "personGroupExt.lookup.for.attestation"
  | "personGroupExt.rcg.feedback"
  | "personGroupExt.rcg.like"
  | "personGroupExt.responsibleEmployee"
  | "personGroupExt.substituteEmployee"
  | "personGroupExt.view.forPersonalData"
  | "personGroupExtFullName.view"
  | "personGroupExtFullName.view"
  | "personGroupExtInternship.edit";
export type PersonGroupExtView<
  V extends PersonGroupExtViewName
> = V extends "_base"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<PersonGroupExt, "id">
  : V extends "assignment.card.personGroup"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "jobRequests"
      | "successionPlanning"
      | "businessTrip"
      | "dismissals"
    >
  : V extends "person-group-ext-intern"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "person"
      | "fullName"
    >
  : V extends "personGroup-relevantPerson-fullNameCyrillic"
  ? Pick<PersonGroupExt, "id" | "relevantPerson">
  : V extends "personGroup-view"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "person"
    >
  : V extends "personGroup.add.reserve"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "assessments"
    >
  : V extends "personGroup.browse"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "assignments"
    >
  : V extends "personGroup.candidate"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "person"
      | "personEducation"
      | "personExperience"
      | "personAttachment"
      | "jobRequests"
      | "personContacts"
      | "agreements"
      | "beneficiary"
      | "individualDevelopmentPlan"
      | "internship"
      | "enrollment"
      | "attestation"
    >
  : V extends "personGroup.contacts"
  ? Pick<PersonGroupExt, "id" | "list" | "person" | "personContacts">
  : V extends "personGroup.for.absences"
  ? Pick<PersonGroupExt, "id" | "list">
  : V extends "personGroup.linkedin"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "person"
    >
  : V extends "personGroup.listInfo"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "assessments"
    >
  : V extends "personGroup.master"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "person"
      | "personContacts"
      | "personDocuments"
      | "agreements"
      | "dismissals"
      | "cases"
      | "addresses"
      | "businessTrip"
    >
  : V extends "personGroup.noAssignment"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "assignments"
    >
  : V extends "personGroup.person.info"
  ? Pick<PersonGroupExt, "id" | "list" | "person">
  : V extends "personGroup.scrum.competence"
  ? Pick<PersonGroupExt, "id" | "list" | "person">
  : V extends "personGroup.search"
  ? Pick<PersonGroupExt, "id" | "list">
  : V extends "personGroup.search.candidate"
  ? Pick<PersonGroupExt, "id" | "list" | "person">
  : V extends "personGroup.with.positionGroup"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "assignments"
    >
  : V extends "personGroupBeneficiary"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "person"
      | "personEducation"
      | "personExperience"
      | "personAttachment"
      | "jobRequests"
      | "personContacts"
      | "agreements"
      | "beneficiary"
      | "individualDevelopmentPlan"
      | "internship"
      | "enrollment"
      | "attestation"
      | "jobRequests"
      | "list"
      | "person"
      | "personDocuments"
    >
  : V extends "personGroupExt-absenceEdit"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
    >
  : V extends "personGroupExt-for-search-candidate"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "person"
      | "assignments"
      | "addresses"
      | "totalExperience"
      | "fullName"
      | "personExperience"
      | "currentAssignment"
      | "personContacts"
    >
  : V extends "personGroupExt-view"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
    >
  : V extends "personGroupExt-view-for-requisition-edit"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "currentAssignment"
      | "personFioWithEmployeeNumber"
      | "list"
      | "assignments"
    >
  : V extends "personGroupExt-view-for-selvservice-requisition"
  ? Pick<PersonGroupExt, "id" | "fullName">
  : V extends "personGroupExt.for.enrollment.lookup"
  ? Pick<
      PersonGroupExt,
      "id" | "list" | "fullName" | "assignments" | "currentAssignment"
    >
  : V extends "personGroupExt.for.requisition.edit"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "fullName"
    >
  : V extends "personGroupExt.for.requisition.optionDs"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "assignments"
      | "currentAssignment"
    >
  : V extends "personGroupExt.lookup.for.attestation"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "person"
      | "fullName"
      | "assignments"
      | "currentAssignment"
    >
  : V extends "personGroupExt.rcg.feedback"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
    >
  : V extends "personGroupExt.rcg.like"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
    >
  : V extends "personGroupExt.responsibleEmployee"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "fullName"
    >
  : V extends "personGroupExt.substituteEmployee"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "personFioWithEmployeeNumber"
      | "fullName"
    >
  : V extends "personGroupExt.view.forPersonalData"
  ? Pick<PersonGroupExt, "id" | "list" | "person">
  : V extends "personGroupExtFullName.view"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
    >
  : V extends "personGroupExtFullName.view"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
    >
  : V extends "personGroupExtInternship.edit"
  ? Pick<
      PersonGroupExt,
      | "id"
      | "linkedinAccessToken"
      | "linkedinProfileLink"
      | "linkedinTokenExpiresInDate"
      | "totalExperience"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "firstLastName"
      | "fioWithEmployeeNumber"
      | "personLatinFioWithEmployeeNumber"
      | "personFirstLastNameLatin"
      | "legacyID"
      | "list"
      | "person"
      | "personContacts"
      | "addresses"
      | "personFioWithEmployeeNumber"
      | "fullName"
      | "assignments"
    >
  : never;
