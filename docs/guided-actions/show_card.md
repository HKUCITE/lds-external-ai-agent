---
sidebar_position: 6
---

# 4.6 show_card

The `show_card` action instructs the LDS frontend to render a rich, interactive card within the chat window. This action is ideal for presenting structured information, side-by-side comparisons (diffs), or AI-generated suggestions that require user review before application.
Unlike plain text responses, a `show_card` provides a clear visual hierarchy and actionable buttons (e.g., "Apply Changes") to guide the user's next steps.

---

Basic JSON Structure

```json
{
  "action_type": "show_card",
  "card": {
    "title": "String - The main heading of the card",
    "subtitle": "String (Optional) - A brief contextual subheading",
    "variant": "String - Visual styling: 'info' | 'success' | 'warning' | 'error' | 'neutral'",
    "content": {
      "type": "String - The UI component to render (e.g., 'suggest_changes', 'text', 'list')",
      "data": {
        "//": "The structure of 'data' is strictly determined by the 'type' field above."
      }
    },
    "actions": [
      {
        "id": "String - Unique identifier for the action",
        "label": "String - Text displayed on the button",
        "variant": "String - Button styling: 'primary' | 'secondary' | 'tertiary' | 'danger'",
        "intent": "String - What the button does: 'redirect' | 'dispatch_event' | 'dismiss'",
        "target": "String or Null - The destination URL path or event name",
        "payload": "Object (Optional) - Data to pass to the target"
      }
    ]
  }
}
```

## Content Type Specifications

The `content` object is **polymorphic**. The shape of the `data` object changes depending on the value of the `type` field. Below is the specification for the currently supported types.

### 1. Type: `"suggest_changes"`

Use this type when the AI is recommending specific modifications to existing fields (e.g., improving an ILO statement, adjusting Bloom's Taxonomy levels, or updating assessment methods).

**Schema for `data`:**

```json
{
  "changes": [
    {
      "property": "String - The name of the field being modified (e.g., 'statement', 'bt_level')",
      "original": "Any - The current value (can be String, Number, Array, etc.)",
      "suggested": "Any - The AI's proposed new value (must match the type of 'original')",
      "rationale": "String (Optional) - Why this specific change is recommended"
    }
  ],
  "rationale": "String (Optional) - A high-level summary explaining the overall suggestion"
}
```

Example

```json
{
  "action_type": "show_card",
  "card": {
    "title": "ILO Improvements Suggested",
    "subtitle": "Based on Bloom's Taxonomy",
    "variant": "info",
    "content": {
      "type": "suggest_changes",
      "data": {
        "changes": [
          {
            "property": "statement",
            "original": "Apply design thinking process - Empathize with users",
            "suggested": "Apply design thinking process - Empathize with users and analyze their needs",
            "rationale": "More measurable and specific."
          },
          {
            "property": "type",
            "original": 2,
            "suggested": 3,
            "rationale": "Encourages individual accountability and deeper understanding."
          },
          {
            "property": "bt_level",
            "original": 3,
            "suggested": 4,
            "rationale": "Promotes higher-order thinking skills."
          },
          {
            "property": "subjects",
            "original": [5],
            "suggested": [5, 6],
            "rationale": "Incorporates additional relevant subjects for a more comprehensive learning experience."
          }
        ],
        "rationale": "The suggested changes aim to make the ILO more measurable and specific, aligning with Bloom's Taxonomy for better learning outcomes."
      }
    },
    "actions": [
      {
        "id": "apply_and_redirect",
        "label": "Apply & Open Form",
        "variant": "primary",
        "intent": "redirect",
        "target": "/learning-design/ilo-form",
        "payload": {
          "ilo_id": "123",
          "updated_fields": {
            "statement": "Apply design thinking process - Empathize with users and analyze their needs",
            "type": 3,
            "bt_level": 4,
            "subjects": [5, 6]
          }
        }
      }
    ]
  }
}
```
