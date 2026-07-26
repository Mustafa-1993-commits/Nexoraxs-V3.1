# hr-next API Map

## API Boundary

The repository declares **219** whitelisted Python methods, of which **4** allow guests. Frappe additionally supplies generic resource/DocType APIs, but those handlers are external and are not claimed as repository-owned implementations.

## Repository-Owned API Groups

| Group | Representative methods | Security/scope |
|---|---|---|
| Identity | `get_current_user_info`, `get_current_employee_info`, `get_all_employees` | Session; Frappe list permissions; explicit manager-name guard |
| HR settings | `get_hr_settings` | Session; selected singleton projection |
| Notifications | unread count, mark read, push enabled | Current user filters |
| Attendance | calendar, attendance requests | Current employee/self-vs-approval filters |
| Shifts | requests, approvers, current shifts | Employee/Department permission checks |
| Leave | applications, balance, holidays, types, approval details | Employee and approver/workflow filters |
| Expenses | claims, summaries, types, advances, approval details | Employee and approver filters |
| Form metadata | fields, states, write permissions | Permitted-field and workflow metadata |
| Files | attachments, base64 upload, delete, PDF | Parent/File permission checks |
| Roster | events, schedules, create/delete/swap/break/insert | Filter allowlists and document permissions |
| Authentication configuration | OAuth providers, password-login-disabled | Guest; server-side secret readiness checks |
| Domain controllers | recruitment, appraisal, attendance, leave, payroll, reports | Whitelisted helpers coupled to DocType permission/lifecycle |

## Guest Methods

- `hrms.api.oauth.oauth_providers`
- `hrms.api.system_settings.get_user_pass_login_disabled`
- `hrms.utils.get_country`
- `hrms.www.hrms.get_context_for_dev` (also requires developer mode)

## API Validation and Unknowns

- `require_type_annotated_api_methods = True` and Frappe function type validation are configured.
- Roster query filter keys are allowlisted.
- HTTP rate limits, security headers, generic CRUD semantics, exact authentication middleware, and API versioning are framework/deployment boundaries.

## Whitelisted Method Inventory

| Path | Symbol | Guest |
|---|---|---:|
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_current_user_info` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_current_employee_info` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_all_employees` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_reports_to_employee_name` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_hr_settings` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_unread_notifications_count` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `mark_all_notifications_as_read` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `are_push_notifications_enabled` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_attendance_calendar_events` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_shift_requests` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_attendance_requests` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_shift_request_approvers` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_shifts` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_leave_applications` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_leave_balance_map` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_holidays_for_employee` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_leave_approval_details` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_leave_types` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_expense_claims` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_expense_claim_summary` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_expense_type_description` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_expense_claim_types` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_expense_approval_details` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_employee_advance_balance` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_company_currencies` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_currency_symbols` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_company_cost_center_and_expense_account` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_doctype_fields` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_doctype_states` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_attachments` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `upload_base64_file` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `delete_attachment` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `_download_pdf` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_workflow` | No |
| [hrms/api/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/__init__.py) | `get_permitted_fields_for_write` | No |
| [hrms/api/oauth.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/oauth.py) | `oauth_providers` | Yes |
| [hrms/api/roster.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/roster.py) | `get_default_company` | No |
| [hrms/api/roster.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/roster.py) | `get_events` | No |
| [hrms/api/roster.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/roster.py) | `get_schedule_from_assignment` | No |
| [hrms/api/roster.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/roster.py) | `create_shift_schedule_assignment` | No |
| [hrms/api/roster.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/roster.py) | `delete_shift_schedule_assignment` | No |
| [hrms/api/roster.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/roster.py) | `swap_shift` | No |
| [hrms/api/roster.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/roster.py) | `break_shift` | No |
| [hrms/api/roster.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/roster.py) | `insert_shift` | No |
| [hrms/api/system_settings.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/api/system_settings.py) | `get_user_pass_login_disabled` | Yes |
| [hrms/controllers/employee_boarding_controller.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/controllers/employee_boarding_controller.py) | `get_onboarding_details` | No |
| [hrms/hr/dashboard_chart_source/employees_by_age/employees_by_age.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/dashboard_chart_source/employees_by_age/employees_by_age.py) | `get_data` | No |
| [hrms/hr/dashboard_chart_source/hiring_vs_attrition_count/hiring_vs_attrition_count.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/dashboard_chart_source/hiring_vs_attrition_count/hiring_vs_attrition_count.py) | `get_data` | No |
| [hrms/hr/doctype/appointment_letter/appointment_letter.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/appointment_letter/appointment_letter.py) | `get_appointment_letter_details` | No |
| [hrms/hr/doctype/appraisal/appraisal.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/appraisal/appraisal.py) | `get_feedback_history` | No |
| [hrms/hr/doctype/appraisal/appraisal.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/appraisal/appraisal.py) | `get_kras_for_employee` | No |
| [hrms/hr/doctype/appraisal/appraisal.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/appraisal/appraisal.py) | `set_appraisal_template` | No |
| [hrms/hr/doctype/appraisal/appraisal.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/appraisal/appraisal.py) | `set_kras_and_rating_criteria` | No |
| [hrms/hr/doctype/appraisal/appraisal.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/appraisal/appraisal.py) | `add_feedback` | No |
| [hrms/hr/doctype/appraisal_cycle/appraisal_cycle.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/appraisal_cycle/appraisal_cycle.py) | `get_appraisal_cycle_summary` | No |
| [hrms/hr/doctype/appraisal_cycle/appraisal_cycle.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/appraisal_cycle/appraisal_cycle.py) | `get_employees_without_feedback` | No |
| [hrms/hr/doctype/appraisal_cycle/appraisal_cycle.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/appraisal_cycle/appraisal_cycle.py) | `set_employees` | No |
| [hrms/hr/doctype/appraisal_cycle/appraisal_cycle.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/appraisal_cycle/appraisal_cycle.py) | `create_appraisals` | No |
| [hrms/hr/doctype/appraisal_cycle/appraisal_cycle.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/appraisal_cycle/appraisal_cycle.py) | `complete_cycle` | No |
| [hrms/hr/doctype/attendance/attendance.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/attendance/attendance.py) | `get_events` | No |
| [hrms/hr/doctype/attendance/attendance.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/attendance/attendance.py) | `mark_bulk_attendance` | No |
| [hrms/hr/doctype/attendance/attendance.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/attendance/attendance.py) | `get_unmarked_days` | No |
| [hrms/hr/doctype/attendance/attendance.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/attendance/attendance.py) | `get_employee_shift` | No |
| [hrms/hr/doctype/attendance_request/attendance_request.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/attendance_request/attendance_request.py) | `get_attendance_warnings` | No |
| [hrms/hr/doctype/department_approver/department_approver.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/department_approver/department_approver.py) | `get_approvers` | No |
| [hrms/hr/doctype/employee_advance/employee_advance.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_advance/employee_advance.py) | `create_return_through_additional_salary` | No |
| [hrms/hr/doctype/employee_advance/employee_advance.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_advance/employee_advance.py) | `make_return_entry` | No |
| [hrms/hr/doctype/employee_advance/employee_advance.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_advance/employee_advance.py) | `get_employee_advance_return` | No |
| [hrms/hr/doctype/employee_attendance_tool/employee_attendance_tool.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_attendance_tool/employee_attendance_tool.py) | `get_employees` | No |
| [hrms/hr/doctype/employee_attendance_tool/employee_attendance_tool.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_attendance_tool/employee_attendance_tool.py) | `mark_employee_attendance` | No |
| [hrms/hr/doctype/employee_checkin/employee_checkin.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_checkin/employee_checkin.py) | `add_log_based_on_employee_field` | No |
| [hrms/hr/doctype/employee_checkin/employee_checkin.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_checkin/employee_checkin.py) | `bulk_fetch_shift` | No |
| [hrms/hr/doctype/employee_checkin/employee_checkin.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_checkin/employee_checkin.py) | `set_geolocation` | No |
| [hrms/hr/doctype/employee_checkin/employee_checkin.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_checkin/employee_checkin.py) | `fetch_shift` | No |
| [hrms/hr/doctype/employee_onboarding/employee_onboarding.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_onboarding/employee_onboarding.py) | `make_employee` | No |
| [hrms/hr/doctype/employee_onboarding/employee_onboarding.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_onboarding/employee_onboarding.py) | `mark_onboarding_as_completed` | No |
| [hrms/hr/doctype/employee_performance_feedback/employee_performance_feedback.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_performance_feedback/employee_performance_feedback.py) | `set_feedback_criteria` | No |
| [hrms/hr/doctype/employee_referral/employee_referral.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_referral/employee_referral.py) | `create_job_applicant` | No |
| [hrms/hr/doctype/employee_referral/employee_referral.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/employee_referral/employee_referral.py) | `create_additional_salary` | No |
| [hrms/hr/doctype/exit_interview/exit_interview.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/exit_interview/exit_interview.py) | `send_exit_questionnaire` | No |
| [hrms/hr/doctype/expense_claim/expense_claim.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/expense_claim/expense_claim.py) | `get_expense_claim_account_and_cost_center` | No |
| [hrms/hr/doctype/expense_claim/expense_claim.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/expense_claim/expense_claim.py) | `get_expense_claim_account` | No |
| [hrms/hr/doctype/expense_claim/expense_claim.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/expense_claim/expense_claim.py) | `get_advances` | No |
| [hrms/hr/doctype/expense_claim/expense_claim.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/expense_claim/expense_claim.py) | `get_expense_claim` | No |
| [hrms/hr/doctype/expense_claim/expense_claim.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/expense_claim/expense_claim.py) | `make_expense_claim_for_delivery_trip` | No |
| [hrms/hr/doctype/expense_claim/expense_claim.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/expense_claim/expense_claim.py) | `get_allocation_amount` | No |
| [hrms/hr/doctype/expense_claim/expense_claim.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/expense_claim/expense_claim.py) | `calculate_taxes` | No |
| [hrms/hr/doctype/full_and_final_statement/full_and_final_statement.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/full_and_final_statement/full_and_final_statement.py) | `get_account_and_amount` | No |
| [hrms/hr/doctype/full_and_final_statement/full_and_final_statement.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/full_and_final_statement/full_and_final_statement.py) | `get_outstanding_statements` | No |
| [hrms/hr/doctype/full_and_final_statement/full_and_final_statement.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/full_and_final_statement/full_and_final_statement.py) | `create_journal_entry` | No |
| [hrms/hr/doctype/goal/goal.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/goal/goal.py) | `get_children` | No |
| [hrms/hr/doctype/goal/goal.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/goal/goal.py) | `update_progress` | No |
| [hrms/hr/doctype/goal/goal.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/goal/goal.py) | `update_status` | No |
| [hrms/hr/doctype/goal/goal.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/goal/goal.py) | `add_tree_node` | No |
| [hrms/hr/doctype/hr_settings/hr_settings.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/hr_settings/hr_settings.py) | `set_proceed_with_frequency_change` | No |
| [hrms/hr/doctype/interview/interview.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/interview/interview.py) | `get_interviewers` | No |
| [hrms/hr/doctype/interview/interview.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/interview/interview.py) | `get_feedback` | No |
| [hrms/hr/doctype/interview/interview.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/interview/interview.py) | `get_skill_wise_average_rating` | No |
| [hrms/hr/doctype/interview/interview.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/interview/interview.py) | `update_job_applicant_status` | No |
| [hrms/hr/doctype/interview/interview.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/interview/interview.py) | `get_expected_skill_set` | No |
| [hrms/hr/doctype/interview/interview.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/interview/interview.py) | `create_interview_feedback` | No |
| [hrms/hr/doctype/interview/interview.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/interview/interview.py) | `get_interviewer_list` | No |
| [hrms/hr/doctype/interview/interview.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/interview/interview.py) | `get_events` | No |
| [hrms/hr/doctype/interview/interview.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/interview/interview.py) | `reschedule_interview` | No |
| [hrms/hr/doctype/interview_feedback/interview_feedback.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/interview_feedback/interview_feedback.py) | `get_applicable_interviewers` | No |
| [hrms/hr/doctype/interview_type/interview_type.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/interview_type/interview_type.py) | `create_interview` | No |
| [hrms/hr/doctype/job_applicant/job_applicant.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_applicant/job_applicant.py) | `create_kanban_board` | No |
| [hrms/hr/doctype/job_applicant/job_applicant.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_applicant/job_applicant.py) | `create_interview` | No |
| [hrms/hr/doctype/job_applicant/job_applicant.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_applicant/job_applicant.py) | `schedule_interview` | No |
| [hrms/hr/doctype/job_applicant/job_applicant.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_applicant/job_applicant.py) | `get_interview_details` | No |
| [hrms/hr/doctype/job_applicant/job_applicant.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_applicant/job_applicant.py) | `get_applicant_to_hire_percentage` | No |
| [hrms/hr/doctype/job_offer/job_offer.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_offer/job_offer.py) | `make_employee` | No |
| [hrms/hr/doctype/job_offer/job_offer.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_offer/job_offer.py) | `get_offer_acceptance_rate` | No |
| [hrms/hr/doctype/job_opening/job_opening.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_opening/job_opening.py) | `get_close_warning` | No |
| [hrms/hr/doctype/job_opening_template/job_opening_template.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_opening_template/job_opening_template.py) | `create_job_opening_from_template` | No |
| [hrms/hr/doctype/job_requisition/job_requisition.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_requisition/job_requisition.py) | `make_job_opening` | No |
| [hrms/hr/doctype/job_requisition/job_requisition.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_requisition/job_requisition.py) | `get_avg_time_to_fill` | No |
| [hrms/hr/doctype/job_requisition/job_requisition.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_requisition/job_requisition.py) | `check_duplicate_job_requisition` | No |
| [hrms/hr/doctype/job_requisition/job_requisition.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/job_requisition/job_requisition.py) | `associate_job_opening` | No |
| [hrms/hr/doctype/leave_adjustment/leave_adjustment.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_adjustment/leave_adjustment.py) | `get_leave_allocation_for_posting_date` | No |
| [hrms/hr/doctype/leave_adjustment/leave_adjustment.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_adjustment/leave_adjustment.py) | `get_allocated_leave_types` | No |
| [hrms/hr/doctype/leave_allocation/leave_allocation.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_allocation/leave_allocation.py) | `expire_carried_forward_allocation` | No |
| [hrms/hr/doctype/leave_allocation/leave_allocation.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_allocation/leave_allocation.py) | `set_total_leaves_allocated` | No |
| [hrms/hr/doctype/leave_allocation/leave_allocation.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_allocation/leave_allocation.py) | `allocate_leaves_manually` | No |
| [hrms/hr/doctype/leave_allocation/leave_allocation.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_allocation/leave_allocation.py) | `get_monthly_earned_leave` | No |
| [hrms/hr/doctype/leave_allocation/leave_allocation.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_allocation/leave_allocation.py) | `create_leave_adjustment` | No |
| [hrms/hr/doctype/leave_allocation/leave_allocation.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_allocation/leave_allocation.py) | `retry_failed_allocations` | No |
| [hrms/hr/doctype/leave_application/leave_application.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_application/leave_application.py) | `get_leave_metrics_and_details` | No |
| [hrms/hr/doctype/leave_application/leave_application.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_application/leave_application.py) | `get_number_of_leave_days` | No |
| [hrms/hr/doctype/leave_application/leave_application.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_application/leave_application.py) | `get_leave_details` | No |
| [hrms/hr/doctype/leave_application/leave_application.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_application/leave_application.py) | `get_leave_balance_on` | No |
| [hrms/hr/doctype/leave_application/leave_application.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_application/leave_application.py) | `get_holidays` | No |
| [hrms/hr/doctype/leave_application/leave_application.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_application/leave_application.py) | `get_events` | No |
| [hrms/hr/doctype/leave_application/leave_application.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_application/leave_application.py) | `get_mandatory_approval` | No |
| [hrms/hr/doctype/leave_application/leave_application.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_application/leave_application.py) | `get_leave_approver` | No |
| [hrms/hr/doctype/leave_application/leave_application.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_application/leave_application.py) | `get_leave_approver_and_mandatory` | No |
| [hrms/hr/doctype/leave_application/leave_application.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_application/leave_application.py) | `validate_half_day_date` | No |
| [hrms/hr/doctype/leave_block_list/leave_block_list.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_block_list/leave_block_list.py) | `set_weekly_off_dates` | No |
| [hrms/hr/doctype/leave_control_panel/leave_control_panel.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_control_panel/leave_control_panel.py) | `allocate_leave` | No |
| [hrms/hr/doctype/leave_control_panel/leave_control_panel.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_control_panel/leave_control_panel.py) | `get_employees` | No |
| [hrms/hr/doctype/leave_control_panel/leave_control_panel.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_control_panel/leave_control_panel.py) | `get_latest_leave_period` | No |
| [hrms/hr/doctype/leave_encashment/leave_encashment.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_encashment/leave_encashment.py) | `get_leave_details_for_encashment` | No |
| [hrms/hr/doctype/leave_ledger_entry/leave_ledger_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_ledger_entry/leave_ledger_entry.py) | `expire_allocation` | No |
| [hrms/hr/doctype/leave_policy_assignment/leave_policy_assignment.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_policy_assignment/leave_policy_assignment.py) | `create_assignment_for_multiple_employees` | No |
| [hrms/hr/doctype/leave_policy_assignment/leave_policy_assignment.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/leave_policy_assignment/leave_policy_assignment.py) | `create_assignment` | No |
| [hrms/hr/doctype/overtime_slip/overtime_slip.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/overtime_slip/overtime_slip.py) | `get_frequency_and_dates` | No |
| [hrms/hr/doctype/overtime_slip/overtime_slip.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/overtime_slip/overtime_slip.py) | `get_emp_and_overtime_details` | No |
| [hrms/hr/doctype/shift_assignment/shift_assignment.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/shift_assignment/shift_assignment.py) | `get_events` | No |
| [hrms/hr/doctype/shift_assignment_tool/shift_assignment_tool.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/shift_assignment_tool/shift_assignment_tool.py) | `get_employees` | No |
| [hrms/hr/doctype/shift_assignment_tool/shift_assignment_tool.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/shift_assignment_tool/shift_assignment_tool.py) | `bulk_assign` | No |
| [hrms/hr/doctype/shift_assignment_tool/shift_assignment_tool.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/shift_assignment_tool/shift_assignment_tool.py) | `bulk_process_shift_requests` | No |
| [hrms/hr/doctype/shift_location/shift_location.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/shift_location/shift_location.py) | `set_geolocation` | No |
| [hrms/hr/doctype/shift_type/shift_type.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/shift_type/shift_type.py) | `process_auto_attendance` | No |
| [hrms/hr/doctype/staffing_plan/staffing_plan.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/staffing_plan/staffing_plan.py) | `get_designation_counts` | No |
| [hrms/hr/doctype/staffing_plan/staffing_plan.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/staffing_plan/staffing_plan.py) | `get_active_staffing_plan_details` | No |
| [hrms/hr/doctype/staffing_plan/staffing_plan.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/staffing_plan/staffing_plan.py) | `set_job_requisitions` | No |
| [hrms/hr/doctype/training_result/training_result.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/training_result/training_result.py) | `get_employees` | No |
| [hrms/hr/doctype/vehicle_log/vehicle_log.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/vehicle_log/vehicle_log.py) | `make_expense_claim` | No |
| [hrms/hr/doctype/vehicle_log/vehicle_log.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/vehicle_log/vehicle_log.py) | `get_draft_expense_claims` | No |
| [hrms/hr/doctype/vehicle_log/vehicle_log.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/doctype/vehicle_log/vehicle_log.py) | `get_draft_expense_claim_cancellation_actions` | No |
| [hrms/hr/page/organizational_chart/organizational_chart.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/page/organizational_chart/organizational_chart.py) | `get_children` | No |
| [hrms/hr/page/team_updates/team_updates.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/page/team_updates/team_updates.py) | `get_data` | No |
| [hrms/hr/report/monthly_attendance_sheet/monthly_attendance_sheet.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/report/monthly_attendance_sheet/monthly_attendance_sheet.py) | `get_attendance_years` | No |
| [hrms/hr/utils.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/utils.py) | `get_employee_field_property` | No |
| [hrms/hr/utils.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/utils.py) | `get_leave_period` | No |
| [hrms/hr/utils.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/utils.py) | `get_monthly_earned_leave` | No |
| [hrms/hr/utils.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/hr/utils.py) | `set_geolocation_from_coordinates` | No |
| [hrms/overrides/employee_master.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/overrides/employee_master.py) | `get_timeline_data` | No |
| [hrms/overrides/employee_master.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/overrides/employee_master.py) | `get_retirement_date` | No |
| [hrms/overrides/employee_payment_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/overrides/employee_payment_entry.py) | `get_payment_entry_for_employee` | No |
| [hrms/overrides/employee_payment_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/overrides/employee_payment_entry.py) | `get_payment_reference_details` | No |
| [hrms/overrides/employee_payment_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/overrides/employee_payment_entry.py) | `get_reference_details_for_employee` | No |
| [hrms/overrides/employee_payment_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/overrides/employee_payment_entry.py) | `set_exchange_rate_in_advance` | No |
| [hrms/payroll/doctype/bulk_salary_structure_assignment/bulk_salary_structure_assignment.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/bulk_salary_structure_assignment/bulk_salary_structure_assignment.py) | `get_employees` | No |
| [hrms/payroll/doctype/bulk_salary_structure_assignment/bulk_salary_structure_assignment.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/bulk_salary_structure_assignment/bulk_salary_structure_assignment.py) | `bulk_assign_structure` | No |
| [hrms/payroll/doctype/employee_benefit_application/employee_benefit_application.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/employee_benefit_application/employee_benefit_application.py) | `set_benefit_components_and_currency` | No |
| [hrms/payroll/doctype/employee_benefit_claim/employee_benefit_claim.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/employee_benefit_claim/employee_benefit_claim.py) | `get_benefit_components` | No |
| [hrms/payroll/doctype/employee_benefit_claim/employee_benefit_claim.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/employee_benefit_claim/employee_benefit_claim.py) | `get_benefit_details` | No |
| [hrms/payroll/doctype/employee_tax_exemption_declaration/employee_tax_exemption_declaration.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/employee_tax_exemption_declaration/employee_tax_exemption_declaration.py) | `make_proof_submission` | No |
| [hrms/payroll/doctype/gratuity/gratuity.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/gratuity/gratuity.py) | `calculate_work_experience_and_amount` | No |
| [hrms/payroll/doctype/payroll_correction/payroll_correction.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_correction/payroll_correction.py) | `fetch_salary_slip_details` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `get_start_end_dates` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `get_end_date` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `get_payroll_entries_for_jv` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `employee_query` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `fill_employee_details` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `create_salary_slips` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `submit_salary_slips` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `has_bank_entries` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `make_bank_entry` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `get_employees_with_unmarked_attendance` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `create_overtime_slips` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `submit_overtime_slips` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `get_unsubmitted_overtime_slips` | No |
| [hrms/payroll/doctype/payroll_entry/payroll_entry.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/payroll_entry/payroll_entry.py) | `get_overtime_slip_details` | No |
| [hrms/payroll/doctype/salary_component/salary_component.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_component/salary_component.py) | `get_structures_to_be_updated` | No |
| [hrms/payroll/doctype/salary_component/salary_component.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_component/salary_component.py) | `update_salary_structures` | No |
| [hrms/payroll/doctype/salary_slip/salary_slip.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_slip/salary_slip.py) | `make_salary_slip_from_timesheet` | No |
| [hrms/payroll/doctype/salary_slip/salary_slip.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_slip/salary_slip.py) | `enqueue_email_salary_slips` | No |
| [hrms/payroll/doctype/salary_slip/salary_slip.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_slip/salary_slip.py) | `get_emp_and_working_day_details` | No |
| [hrms/payroll/doctype/salary_slip/salary_slip.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_slip/salary_slip.py) | `process_salary_based_on_working_days` | No |
| [hrms/payroll/doctype/salary_slip/salary_slip.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_slip/salary_slip.py) | `set_totals` | No |
| [hrms/payroll/doctype/salary_structure/salary_structure.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_structure/salary_structure.py) | `make_salary_slip` | No |
| [hrms/payroll/doctype/salary_structure/salary_structure.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_structure/salary_structure.py) | `get_employees` | No |
| [hrms/payroll/doctype/salary_structure/salary_structure.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_structure/salary_structure.py) | `get_salary_component` | No |
| [hrms/payroll/doctype/salary_structure/salary_structure.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_structure/salary_structure.py) | `assign_salary_structure` | No |
| [hrms/payroll/doctype/salary_structure_assignment/salary_structure_assignment.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_structure_assignment/salary_structure_assignment.py) | `get_employee_currency` | No |
| [hrms/payroll/doctype/salary_structure_assignment/salary_structure_assignment.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_structure_assignment/salary_structure_assignment.py) | `set_payroll_cost_centers` | No |
| [hrms/payroll/doctype/salary_structure_assignment/salary_structure_assignment.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_structure_assignment/salary_structure_assignment.py) | `are_opening_entries_required` | No |
| [hrms/payroll/doctype/salary_withholding/salary_withholding.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_withholding/salary_withholding.py) | `get_payroll_frequency` | No |
| [hrms/payroll/doctype/salary_withholding/salary_withholding.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/doctype/salary_withholding/salary_withholding.py) | `set_withholding_cycles_and_to_date` | No |
| [hrms/payroll/report/provident_fund_deductions/provident_fund_deductions.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/report/provident_fund_deductions/provident_fund_deductions.py) | `get_years` | No |
| [hrms/payroll/utils.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/payroll/utils.py) | `get_payroll_settings_for_payment_days` | No |
| [hrms/subscription_utils.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/subscription_utils.py) | `get_add_on_details` | No |
| [hrms/subscription_utils.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/subscription_utils.py) | `subscription_updated` | No |
| [hrms/utils/__init__.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/utils/__init__.py) | `get_country` | Yes |
| [hrms/utils/custom_method_for_charts.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/utils/custom_method_for_charts.py) | `get_upcoming_holidays` | No |
| [hrms/utils/hierarchy_chart.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/utils/hierarchy_chart.py) | `get_all_nodes` | No |
| [hrms/www/hrms.py](https://github.com/frappe/hrms/blob/8be64b735e347fdaaf4db3b045605e9a7a9ba856/hrms/www/hrms.py) | `get_context_for_dev` | Yes |

## Evidence Boundary

All source claims resolve to immutable blobs under `8be64b735e347fdaaf4db3b045605e9a7a9ba856:<path>`. README, filenames, routes, dependencies, and labels were used only as leads unless executable source, metadata, configuration, or tests corroborated the claim. No source code was copied and no feature was selected or recommended.
