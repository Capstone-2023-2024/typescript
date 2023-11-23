type RecipientType = "mayor" | "adviser" | RoleWithAdmin
type RoleWithAdmin = "program_chair" | "department_head" | "board_member"

interface RoleProps {
  readonly name: "super_admin" | "admin" | "sub_admin" | "faculty"
  partial: boolean
}
/** This is the info for admins in `permission` collection */
interface PermissionProps {
  email: string
  role: RoleProps
}
interface BaseRoleProps {
  role: RoleProps
  disabled?: boolean
}

export type {
  BaseRoleProps,
  PermissionProps,
  RecipientType,
  RoleProps,
  RoleWithAdmin,
}
