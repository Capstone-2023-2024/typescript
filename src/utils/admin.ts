import type { RoleProps } from "../types/permission"

const roleOptions: RoleProps[] = [
  { name: "super_admin", partial: false },
  { name: "admin", partial: false },
  { name: "sub_admin", partial: false },
  { name: "faculty", partial: false },
]

export { roleOptions }
