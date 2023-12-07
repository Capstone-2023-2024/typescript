import type { DateFileProps, FirestoreDatabaseProps } from "./document"
import type { DocumentProps } from "./media"
import type { RecipientType } from "./permission"
import type { StudentInfoProps } from "./user"

interface ComplaintFormBaseProps {
  name: string
  signature: string
}

/** areasOfConcern: `acads` - Academic performance (grades, ratings) `bulsu` - Grievance against faculty member, classmate, member of the BulSU commmunity, `social` - Recent social changes affecting studies (familial and/or peer relationships), `others` - Please specify*/
interface StudentRequestProps
  extends ComplaintFormBaseProps,
    Pick<
      StudentInfoProps,
      "yearLevel" | "section" | "course" | "studentNo" | "schoolYear"
    > {
  program: string
  areasOfConcern: "acads" | "bulsu" | "social" | "others"
  dateCreated: number
}

interface FacultyResponseProps extends ComplaintFormBaseProps {
  dateReceived: number
  modeOfConsultation: "onsite" | "online"
  resolution: "resolved" | "turn-over"
  otherRemarks: string
  dateOfConsultation: number
}

interface ComplaintFormProps {
  student: StudentRequestProps
  faculty: FacultyResponseProps
}

interface ComplaintProps
  extends DateFileProps,
    Pick<StudentInfoProps, "studentNo"> {
  recipient: RecipientType
  messages: ComplaintBaseProps[]
  status: "processing" | "resolved" | "turn-over"
  turnOvers?: number
  referenceId?: string
}
interface ComplaintBaseProps extends Partial<DocumentProps> {
  notif_id?: string
  message: string
  sender: string
  timestamp: number
}
interface ReadComplaintProps extends ComplaintProps, FirestoreDatabaseProps {}
interface ReadClassSectionProps
  extends ComplaintBaseProps,
    FirestoreDatabaseProps {}

export type {
  ComplaintBaseProps,
  ComplaintFormProps,
  ComplaintProps,
  FacultyResponseProps,
  ReadClassSectionProps,
  ReadComplaintProps,
  StudentRequestProps,
}
