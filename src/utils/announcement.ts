import type { AnnouncementType } from "../types/announcement"

interface AnnouncementTypeProps {
  name: string
  type: AnnouncementType
}
const announcementType: AnnouncementTypeProps[] = [
  {
    name: "event",
    type: "event",
  },
  {
    name: "university_memo",
    type: "university_memorandum",
  },
  {
    name: "recognition",
    type: "recognition",
  },
  {
    name: "others",
    type: "others",
  },
]

export { announcementType }
