import type { DateFileProps, FirestoreDatabaseProps } from "./document"
import type { DocumentProps } from "./media"
import type { RecipientType } from "./permission"
import type { StudentInfoProps } from "./user"

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
  message: string
  sender: string
  timestamp: number
}
interface ReadComplaintProps extends ComplaintProps, FirestoreDatabaseProps {}

export type { ComplaintProps, ComplaintBaseProps, ReadComplaintProps }
