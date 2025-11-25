---
sidebar_position: 1
---

# 7.1 Context-Specific Field Definitions

| Context    | Mandatory Fields    | Optional Fields                                                                                                                                               |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CourseInfo | topic               | description, subjects\[\], grade_levels\[\], learning_time, lesson_session_count, per_lesson_session_time                                                     |
| DP         | name                | description, learner_roles, steps\[\], sequence                                                                                                               |
| PA         | name                | description, sequence, foci\[\]                                                                                                                               |
| ILO        | type\[\], statement | bt_level, subjects\[\], sequence                                                                                                                              |
| Task       | name                | description, type, delivery_mode, stage, social_organization, duration, feedback_providers\[\], linked_ilos\[\], elearning_tools\[\], resources\[\], sequence |
| CC         | name                | dp_steps\[\], pa_foci\[\], linked_ilos\[\], sequence                                                                                                          |
| Lesson     | name                | tasks\[\], sequence                                                                                                                                           |
