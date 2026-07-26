# hr-next Route and Screen Map

## Browser Route Families

| Base | Surface | Guard |
|---|---|---|
| `/app` and workspace routes | Frappe Desk | Framework session plus DocType/page/workspace roles |
| `/hrms/*` | Employee PWA | PWA guard plus active Employee binding |
| `/hr/roster` | Roster | Current-user resource; redirects to Frappe login |
| generated Job Opening routes | Public jobs | Website generator configuration |
| `job_application` | Job Applicant web form | Guest form, create-only |

## Employee PWA Routes

| Path | Screen | Exact source |
|---|---|---|
| `/home` | Home | [frontend/src/views/Home.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/Home.vue) |
| `/dashboard/attendance` | Attendance dashboard | [frontend/src/views/attendance/Dashboard.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/attendance/Dashboard.vue) |
| `/dashboard/leaves` | Leave dashboard | [frontend/src/views/leave/Dashboard.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/leave/Dashboard.vue) |
| `/dashboard/expense-claims` | Expense dashboard | [frontend/src/views/expense_claim/Dashboard.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/expense_claim/Dashboard.vue) |
| `/dashboard/salary-slips` | Salary dashboard | [frontend/src/views/salary_slip/Dashboard.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/salary_slip/Dashboard.vue) |
| `/login` | Login | [frontend/src/views/Login.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/Login.vue) |
| `/forgot-password` | Forgot password | [frontend/src/views/ForgotPassword.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/ForgotPassword.vue) |
| `/profile` | Profile | [frontend/src/views/Profile.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/Profile.vue) |
| `/notifications` | Notifications | [frontend/src/views/Notifications.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/Notifications.vue) |
| `/settings` | Settings | [frontend/src/views/AppSettings.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/AppSettings.vue) |
| `/change-password` | Change password | [frontend/src/views/ChangePassword.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/ChangePassword.vue) |
| `/invalid-employee` | Invalid employee recovery | [frontend/src/views/InvalidEmployee.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/InvalidEmployee.vue) |
| `/attendance-requests` | Attendance request list | [frontend/src/views/attendance/AttendanceRequestList.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/attendance/AttendanceRequestList.vue) |
| `/attendance-requests/new` | Attendance request create | [frontend/src/views/attendance/AttendanceRequestForm.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/attendance/AttendanceRequestForm.vue) |
| `/attendance-requests/:id` | Attendance request detail | [frontend/src/views/attendance/AttendanceRequestForm.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/attendance/AttendanceRequestForm.vue) |
| `/shift-requests` | Shift request list | [frontend/src/views/attendance/ShiftRequestList.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/attendance/ShiftRequestList.vue) |
| `/shift-requests/new` | Shift request create | [frontend/src/views/attendance/ShiftRequestForm.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/attendance/ShiftRequestForm.vue) |
| `/shift-requests/:id` | Shift request detail | [frontend/src/views/attendance/ShiftRequestForm.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/attendance/ShiftRequestForm.vue) |
| `/shift-assignments` | Shift assignment list | [frontend/src/views/attendance/ShiftAssignmentList.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/attendance/ShiftAssignmentList.vue) |
| `/shift-assignments/new` | Shift assignment create route | [frontend/src/views/attendance/ShiftAssignmentForm.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/attendance/ShiftAssignmentForm.vue) |
| `/shift-assignments/:id` | Shift assignment detail | [frontend/src/views/attendance/ShiftAssignmentForm.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/attendance/ShiftAssignmentForm.vue) |
| `/employee-checkins` | Employee check-ins | [frontend/src/views/attendance/EmployeeCheckinList.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/attendance/EmployeeCheckinList.vue) |
| `/leave-applications` | Leave list | [frontend/src/views/leave/List.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/leave/List.vue) |
| `/leave-applications/new` | Leave create | [frontend/src/views/leave/Form.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/leave/Form.vue) |
| `/leave-applications/:id` | Leave detail | [frontend/src/views/leave/Form.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/leave/Form.vue) |
| `/expense-claims` | Expense list | [frontend/src/views/expense_claim/List.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/expense_claim/List.vue) |
| `/expense-claims/new` | Expense create | [frontend/src/views/expense_claim/Form.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/expense_claim/Form.vue) |
| `/expense-claims/:id` | Expense detail | [frontend/src/views/expense_claim/Form.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/expense_claim/Form.vue) |
| `/employee-advances` | Advance list | [frontend/src/views/employee_advance/List.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/employee_advance/List.vue) |
| `/employee-advances/new` | Advance create | [frontend/src/views/employee_advance/Form.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/employee_advance/Form.vue) |
| `/employee-advances/:id` | Advance detail | [frontend/src/views/employee_advance/Form.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/employee_advance/Form.vue) |
| `/salary-slips/:id` | Salary slip detail | [frontend/src/views/salary_slip/Detail.vue](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/frontend/src/views/salary_slip/Detail.vue) |

## Desk Pages and Workspaces

- Pages: Organizational Chart and Team Updates.
- Workspaces: Expenses, HR Setup, Leaves, Performance, Recruitment, Shift & Attendance, Tenure, Payroll, Tax & Benefits.
- Standard Frappe forms/list/report routes are generated from DocType/report metadata and therefore remain framework behavior.

## Contradictory Route Evidence

The PWA guard checks `/update-password`, but no such router record exists; the implemented local screen is `/change-password`. This is recorded as `HRNEXT-C005`, not normalized away.

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
