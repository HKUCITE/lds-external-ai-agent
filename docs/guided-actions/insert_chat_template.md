---
sidebar_position: 4
---

# 4.4 insert_chat_template

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
