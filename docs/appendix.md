---
sidebar_position: 7
---

# 7. Appendix – Context-Specific Field Definitions & Allowed highlight_target Values

### 7.1 Context-Specific Field Definitions

| Context    | Mandatory Fields    | Optional Fields                                                                                                                                               |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CourseInfo | topic               | description, subjects\[\], grade_levels\[\], learning_time, lesson_session_count, per_lesson_session_time                                                     |
| DP         | name                | description, learner_roles, steps\[\], sequence                                                                                                               |
| PA         | name                | description, sequence, foci\[\]                                                                                                                               |
| ILO        | type\[\], statement | bt_level, subjects\[\], sequence                                                                                                                              |
| Task       | name                | description, type, delivery_mode, stage, social_organization, duration, feedback_providers\[\], linked_ilos\[\], elearning_tools\[\], resources\[\], sequence |
| CC         | name                | dp_steps\[\], pa_foci\[\], linked_ilos\[\], sequence                                                                                                          |
| Lesson     | name                | tasks\[\], sequence                                                                                                                                           |

### 7.2 Allowed highlight_target Values

Common highlight targets (valid for all contexts):

- #save-button
- #cancel-button
- #add-button
- #edit-button
- #delete-button
- #patterns-button
- #chat-input
- #navigation-menu
- #info-panel
- #assistant-panel
- #my-library-button
- #groups-button
- #notifications-button
- #language-switcher
- #menu-button-course-overview
- #menu-button-designer-dashboard
- #menu-button-ilap-converter
- #expand-nav-bar
- #collapse-nav-bar
- #expand-right-panel
- #collapse-right-panel
- #maximize-info-panel
- #minimize-info-panel
- #maximize-assistant-panel
- #minimize-assistant-panel

Context-specific highlight targets:

- #&lt;Context&gt;.&lt;Button&gt;

Example: #Task.add-button

- #&lt;Context&gt;.&lt;Field Name&gt;-field

Example: #ILO.type-field

- #menu-button-&lt;Context&gt;

Example: #menu-button-lesson

DP

- #DP.copy-pattern
- #DP.view-pattern

PA

- #PA.copy-pattern
- #PA.view-pattern

ILO

- #ILO.copy-pattern
- #ILO.view-pattern

CC

- #CC.expand-all
- #CC.collapse-all
- #CC.expand
- #CC.collapse
- #CC.show-linked-ilo
- #CC.show-dp
- #CC.show-pa
- #CC.show-tasks

Task

- #Task.move-task
- #Task.copy-task
- #Task.show-linked-ilo
- #Task.add-elearning-tool
- #Task.add-resource
- #Task.link-ilos
- #Task.unlink-ilo
- #Task.save-add-another

Lesson

- #Lesson.auto-arrange
