---
sidebar_position: 1
---

# 7.1 Context-Specific Field Definitions

| Context    | Mandatory Fields    | Optional Fields                                                                                                                                                   | Example JSON file                           |
| ---------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| CourseInfo | topic               | id, description, subjects\[\], grade_levels\[\], learning_time, lesson_session_count, per_lesson_session_time                                                     | [CourseInfo.json](/example/CourseInfo.json) |
| ILO        | type\[\], statement | id, bt_level, subjects\[\], sequence                                                                                                                              | [ILO.json](/example/ILO.json)               |
| DP         | name                | id, description, learner_roles, steps\[\], sequence                                                                                                               | [DP.json](/example/DP.json)                 |
| PA         | name                | id, description, sequence, foci\[\]                                                                                                                               | [PA.json](/example/PA.json)                 |
| CC         | name                | id, intended_learning_outcomes\[\], disciplinary_practice_steps\[\], pedagogical_approach_foci\[\], learning_tasks\[\],sequence                                   | [CC.json](/example/CC.json)                 |
| Task       | name                | id, description, type, delivery_mode, stage, social_organization, duration, feedback_providers\[\], linked_ilos\[\], elearning_tools\[\], resources\[\], sequence | [Task.json](/example/Task.json)             |
| Lesson     | name                | id, tasks\[\], sequence                                                                                                                                           | [Lesson.json](/example/Lesson.json)         |
