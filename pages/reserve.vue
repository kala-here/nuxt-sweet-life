<template>
  <div>
    <v-spacer class="h-75" />

    <h2>
      {{ title }}
    </h2>
    <div v-for="field of fields" :key="field.label">
      <v-text-field
        v-if="['text', 'phone', 'email', 'date'].includes(field.type)"
        v-model="field.value"
        :label="field.label"
        :aria-label="field.ariaLabel"
        :type="field.type === 'phone' ? field.type : ''"
        solo
      />
      <v-select
        v-if="field.type === 'select'"
        v-model="field.value"
        :label="field.label"
        :aria-label="field.ariaLabel"
        :items="field.items"
        solo
      />
      <v-textarea
        v-if="field.type === 'textarea'"
        v-model="field.value"
        :label="field.label"
        :aria-label="field.ariaLabel"
        solo
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'reserve',
  data: () => {
    return {
      title: 'Reserve your cabana',
      fields: {
        firstNameField: {
          ariaLabel: 'first name field',
          label: 'First Name',
          type: 'text',
          value: '',
        },
        lastNameField: {
          ariaLabel: 'last name field',
          label: 'Last Name',
          type: 'text',
          value: '',
        },
        phoneField: {
          ariaLabel: 'phone number field',
          label: 'Phone Number',
          type: 'phone',
          value: '',
        },
        emailField: {
          ariaLabel: 'email field',
          label: 'Email Address',
          type: 'email',
          value: '',
        },
        dateOfArrival: {
          ariaLabel: 'date of arrival field',
          label: 'Date of Arrival',
          type: 'date',
          value: '',
        },
        rentingDaysField: {
          ariaLabel: 'number of cabana rental days field',
          label: 'Number of Days',
          type: 'select',
          value: 3,
        },
        tentCountField: {
          ariaLabel: 'number of cabanas renting field',
          label: 'Number of Tents',
          type: 'select',
          value: 1,
        },
        addressField: {
          ariaLabel: 'address of rental field',
          label: 'Address of Rental House',
          type: 'text',
          value: '',
        },
        commentsField: {
          ariaLabel: 'comments field',
          label: 'Comments',
          type: 'textarea',
          value: '',
        },
        submitButton: {
          ariaLabel: 'submit your reservation',
          label: 'Submit',
          type: 'submit',
        },
      },
    };
  },
};
</script>
