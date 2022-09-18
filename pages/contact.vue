<template>
  <div>
    Easily reach us at <a :href="`mailto:${email}`" class="contact-email-link">{{ email }}</a>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: () => {
    return {
      email: 'info@seabreezerentals.org',
    };
  },
};
</script>
