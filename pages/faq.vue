<template>
  <div>
    <div v-for="{ question, answer } of faq" :key="question">
      <div>{{ question }}</div>
      <div>{{ answer }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: () => {
    return {
      faq: [
        {
          question: 'Q: When should the cabana arrive?',
          answer:
            'A: The tents will be set up and taken down daily. They will be up by 9 am and taken down starting at 5pm - unless there is wind or bad weather.',
        },
        {
          question:
            'Q: Will I be able to get a refund in case of bad weather or early take downs?',
          answer:
            'A: Unfortunately we cannot issue a full refund in these cases, as we still have to pay our employees for set up and tear down each day. In the case of only one bad weather day, we cannot issue a refund. If there are multiple bad weather days, we will refund you $40 for each day.',
        },
      ],
    };
  },
};
</script>
