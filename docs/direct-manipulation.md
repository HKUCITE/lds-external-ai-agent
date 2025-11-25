---
sidebar_position: 5
---

# 5. Direct Data Manipulation in LDS

These actions are immediate data changes to the Learning Design System (LDS).

### 5.1 apply_pattern

Explanation:

- Automatically applies an AI-generated instructional design pattern to a specific context (CourseInfo, DP, PA, ILO, CC, Task, Lesson).
- The pattern_object must follow Appendix 7.1 Context-Specific Field Definitions for the target context.

Basic JSON Structure:

```json
{
  "action_type": "apply_pattern",
  "target": { "context": "CourseInfo | DP | PA | ILO | CC | Task | Lesson" },
  "payload": {
    "pattern_object": {
      /* Fields vary by context — see Appendix 7.1 */
    }
  }
}
```

Example (ILO context):

```json
{
  "action_type": "apply_pattern",
  "target": { "context": "ILO" },
  "payload": {
    "pattern_object": {
      "type": [{ "id": 2, "name": "Disciplinary Skills" }],
      "statement": "AI-suggested — Apply design thinking process: Empathize with users",
      "bt_level": { "id": 3, "name": "Apply" },
      "subjects": [{ "id": 5, "name": "Technology Education" }]
    }
  }
}
```

### 5.2 apply_suggestion

Explanation:

- Directly applies an AI-generated suggestion to update the target LDS element.
- The “changes” object must match the allowed fields for the given context (Appendix 7.1).

Basic JSON Structure:

```json
{
  "action_type": "apply_suggestion",
  "target": {
    "context": "CourseInfo | DP | PA | ILO | CC | Task | Lesson",
    "context_object_id": "integer"
  },
  "payload": {
    "changes": {
      /* Fields allowed for this context — see Appendix 7.1 */
    }
  }
}
```

Example (Task context):

```json
{
  "action_type": "apply_suggestion",
  "target": { "context": "Task", "context_object_id": 123 },
  "payload": {
    "changes": {
      "name": "AI-suggested — Peer Review Activity",
      "description": "Students review each other’s drafts and give constructive feedback.",
      "linked_ilos": [45, 46],
      "duration": "30"
    }
  }
}
```

### 5.3 modify_element

Explanation:

- Updates multiple fields of an existing LDS element in a single operation.
- Commonly used for bulk updates or when importing structured AI-generated data.

Basic JSON Structure:

```json
{
  "action_type": "modify_element",
  "target": {
    "context": "CourseInfo | DP | PA | ILO | CC | Task | Lesson",
    "context_object_id": "integer"
  },
  "payload": {
    "fields": {
      /* Fields allowed for this context — see Appendix 7.1 */
    }
  }
}
```

Example (CourseInfo context):

```json
{
  "action_type": "modify_element",
  "target": { "context": "CourseInfo", "context_object_id": 10 },
  "payload": {
    "fields": {
      "topic": "AI-suggested — Introduction to Artificial Intelligence",
      "description": "Foundational course on AI concepts and applications.",
      "subjects": ["Science Education", "Technology Education"],
      "grade_levels": ["S5"],
      "learning_time": "40"
    }
  }
}
```

### 5.4 modify_field

Explanation:

- Updates a single field of an LDS element.
- Used for quick inline edits suggested by the AI or manually entered by the user.

Basic JSON Structure:

```json
{
  "action_type": "modify_field",
  "target": {
    "context": "CourseInfo | DP | PA | ILO | CC | Task | Lesson",
    "context_object_id": "integer"
  },
  "payload": {
    "field_name": "string",
    "new_value": "any"
  }
}
```

Example (PA context):

```json
{
  "action_type": "modify_field",
  "target": { "context": "PA", "context_object_id": 55 },
  "payload": {
    "field_name": "description",
    "new_value": "Inquiry-based learning encouraging exploration and problem-solving."
  }
}
```
