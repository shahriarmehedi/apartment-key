# Multi-Step Form Configuration

This project includes a fully configurable multi-step form system for the `/get-started` page.

## Current Form Flow (14 Steps)

1. **Name** - First and Last Name
2. **Email** - Email Address
3. **Phone** - Phone Number
4. **Bedrooms** - Studio, 1, 2, 3+ Bedrooms
5. **Bathrooms** - 1, 2, 3+ Bathrooms
6. **Budget** - Monthly rent budget ($500-$5,000)
7. **Income** - Monthly income with additional occupants option
8. **Location** - Houston, Dallas/Fort Worth, Austin
9. **Timeframe** - Move-in date
10. **Rental History** - Evictions, Broken Lease, Felony, N/A (multi-select)
11. **Pets** - N/A, Cat, Dog
12. **Referral Source** - How did you hear about us
13. **Additional Information** - Special requests and features
14. **Review & Submit** - Review all information before submitting

## Configuration File

The form is configured through `data/form-config.json`. This JSON file contains:

- **Steps**: Array of form steps with their questions and options
- **Footer**: Terms of service and consent text

## Form Step Types

### 1. Selection (City, Bedrooms)

Large cards with abbreviations and labels.

```json
{
  "type": "selection",
  "options": [
    {
      "id": "unique-id",
      "label": "Display Name",
      "value": "stored-value",
      "abbreviation": "HOU"
    }
  ]
}
```

### 2. List Selection (Bathrooms)

Stacked button list for single selection.

```json
{
  "type": "list-selection",
  "options": [
    {
      "id": "unique-id",
      "label": "1 Bathroom",
      "value": "1"
    }
  ]
}
```

### 3. Slider (Budget)

Range slider with currency or number formatting.

```json
{
  "type": "slider",
  "field": "maxBudget",
  "min": 500,
  "max": 5000,
  "step": 100,
  "default": 1500,
  "format": "currency"
}
```

### 4. Date (Move Date)

Date picker input.

```json
{
  "type": "date",
  "field": "idealMoveDate",
  "placeholder": "MM/DD/YYYY"
}
```

### 5. Multi-Selection (Credit & Background)

Multiple selection groups in one step.

```json
{
  "type": "multi-selection",
  "fields": [
    {
      "label": "Credit Status",
      "field": "creditStatus",
      "options": [...],
      "multiple": false
    },
    {
      "label": "Background Issues",
      "field": "backgroundIssues",
      "options": [...],
      "multiple": true
    }
  ]
}
```

### 6. Form (Contact Details)

Standard form inputs.

```json
{
  "type": "form",
  "fields": [
    {
      "field": "firstName",
      "type": "text",
      "label": "Name",
      "placeholder": "First Name",
      "required": true
    },
    {
      "field": "email",
      "type": "email",
      "label": "Email",
      "placeholder": "youremail@example.com",
      "required": true
    },
    {
      "field": "specialRequests",
      "type": "textarea",
      "label": "Any special features or requests?",
      "required": false
    }
  ]
}
```

## Customization

### Adding a New Step

1. Add a new step object to `data/form-config.json`
2. Update `FormContext.tsx` to include the new field in the `FormData` interface
3. Create a new step component in `components/form/FormSteps.tsx` (if needed)
4. Add the new step case to the `renderStep()` switch in `app/get-started/page.tsx`

### Styling

All components use the brand colors:

- `brand-coral` (#FF9E6D)
- `brand-cyan` (#22D3EE)
- Gradient combinations for buttons and accents

### Brand Colors

The form uses consistent brand styling:

- Selected states use `brand-cyan` borders and `brand-coral` text
- Hover states have subtle transitions
- Progress bar uses coral-to-cyan gradient
- Buttons use coral-to-cyan gradient

## Components

- **FormProvider**: Context provider for form state management
- **FormContainer**: Wrapper with progress bar, navigation, and footer
- **FormComponents**: Reusable UI components (SelectionCard, Input, Slider, etc.)
- **FormSteps**: Individual step components that render based on config

## Form Submission

The form submission handler is in `app/get-started/page.tsx`:

```typescript
const handleSubmit = () => {
  console.log("Form submitted:", formData);
  // Add your form submission logic here
};
```

Replace the console.log with your actual submission logic (API call, email service, etc.).

## Validation

Currently, the form has basic required field validation through HTML5. For custom validation:

1. Add validation logic to `FormContext.tsx`
2. Create a validation schema (e.g., using Zod or Yup)
3. Call validation before allowing step progression or submission
