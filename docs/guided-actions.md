---
sidebar_position: 4
---

# 4. Guided Actions / UI Interactions

### 4.1 show_pattern

Basic JSON Structure

```json
{
  "action_type": "show_pattern",
  "target": { "context": "CourseInfo | DP | PA | ILO | CC | Task | Lesson" },
  "payload": {
    "patterns": [
      {
        /* Structure varies by context — see [Appendix 7.1 Context-Specific Field Definitions](#_y1m7qxkl1vj1) */
      }
    ]
  },
  "ui": { "presentation": "popup | sidebar | inline" }
}
```

Explanation: Displays one or more instructional design patterns for the given context. Fields must follow rules in the [Appendix 7.1 Context-Specific Field Definitions](#_y1m7qxkl1vj1).

Example

```json
{
  "action_type": "show_pattern",
  "target": { "context": "ILO" },
  "payload": {
    "patterns": [
      {
        "statement": "Apply design thinking process - Empathize with users",
        "bt_level": { "id": 3, "name": "Apply" },
        "type": { "id": 2, "name": "Disciplinary Skills" },
        "subject": [{ "id": 5, "name": "Technology Education" }]
      }
    ]
  },
  "ui": { "presentation": "popup" }
}
```

### 4.2 show_suggestion

Basic JSON Structure

```json
{
  "action_type": "show_suggestion",
  "target": {
    "context": "CourseInfo | DP | PA | ILO | CC | Task | Lesson",
    "context_object_id": "integer"
  },
  "payload": {
    "suggestions": [
      {
        /* Fields allowed for this context — see [Appendix 7.1 Context-Specific Field Definitions](#_y1m7qxkl1vj1) */
      }
    ]
  },
  "ui": { "presentation": "popup | tooltip | sidebar" }
}
```

Explanation: Displays suggestions for improving a specific LDS object. Structure varies by context ([Appendix 7.1 Context-Specific Field Definitions](#_y1m7qxkl1vj1) defines allowed fields and which are mandatory/optional).

Example

```json
{
  "action_type": "show_suggestion",
  "target": { "context": "Task", "context_object_id": "123" },
  "payload": {
    "suggestions": [
      { "name": "Include a peer review step after submission." },
      { "description": "Add a reflection section at the end of the task." }
    ]
  },
  "ui": { "presentation": "sidebar" }
}
```

### 4.3 redirect_user

Basic JSON Structure

```json
{
  "action_type": "redirect_user",
  "payload": {
    "actions": [
      {
        "message": "string",
        "presentation": "popup | tooltip | highlight",
        "highlight_target": "string" /* must follow allowed values in [Appendix 7.2 Allowed highlight_target Values](#_1p6gmckbmloj) */
      }
    ]
  }
}
```

Explanation: Guides the user to take specific actions in the LDS interface.

Example

```json
{
  "action_type": "redirect_user",
  "payload": {
    "actions": [
      {
        "message": "Click the 'Add Task' button to create a new task.",
        "presentation": "tooltip",
        "highlight_target": "#Task.add-button"
      }
    ]
  }
}
```

### 4.4 insert_chat_template

Basic JSON Structure

```json
{
  "action_type": "insert_chat_template",
  "payload": {
    "template_id": "string",
    "template_name": "string",
    "template_text": "string",
    "placeholders": [
      { "key": "any_string_1" },
      { "key": "any_string_2" },
      { "key": "another_placeholder" }
    ]
  }
}
```

Explanation:

- "placeholders" is always an array.
- Each item in that array is an object with at least one property:
  "key" → string (free-form, can be anything).
- The "key" values are used to match placeholders in template_text.

Example

```json
{
  "action_type": "insert_chat_template",
  "payload": {
    "template_id": "ilo_statement_001",
    "template_name": "Generate ILO Statement",
    "template_text": "Course name: [course_name], Competency: [competency], Extra field: [custom_tag]",
    "placeholders": [
      { "key": "course_name" },
      { "key": "competency" },
      { "key": "custom_tag" }
    ]
  }
}
```

### 4.5 show_choices

Basic JSON Structure

```json
{
  "action_type": "show_choices",
  "payload": {
    "question": "string",
    "options": [
      {
        "label": "string",
        "next_action": {
          /* any valid action object */
        }
      }
    ]
  }
}
```

Explanation: Displays a multiple-choice question; each option can trigger an immediate action.

Example

```json
{
  "action_type": "show_choices",
  "payload": {
    "question": "Which instructional strategy would you prefer?",
    "options": [
      {
        "label": "Lecture",
        "next_action": {
          "action_type": "show_pattern",
          "target": { "context": "PA" },
          "payload": {
            "patterns": [
              {
                "name": "Self-Directed Learning",
                "description": "Self-Directed Learning (SDL) is a popular educational method that encourages learning around real-world problems and empowers students. It uses a five-step structure, akin to problem-solving, comprising goal setting,self planning, self-monitoring, self-evaluation, and revision.",
                "foci": [
                  "Goal-setting",
                  "Self-planning",
                  "Self-monitoring",
                  "Self-evaluation",
                  "Revision"
                ]
              }
            ]
          },
          "ui": { "presentation": "sidebar" }
        }
      }
    ]
  }
}
```
