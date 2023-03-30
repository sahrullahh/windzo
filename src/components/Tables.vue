<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="(label, labelIndex) in labels"
          :key="labelIndex"
        >
          {{ label.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, itemIndex) in Tables"
        :key="itemIndex"
      >
        <td>{{  }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "TableComponents",
    props: {
      labels: {
        type: Array,
        default: () => [
          {
            field: "id",
            text: "ID",
          },
          {
            field: "name",
            text: "Name",
          },
          { 
            field: "date_created",
            text: "Created At",
          },
        ],
      },
      Tables: {
        type: Array,
        default: [
          {
            text: "ID",
          },
        ],
      },
    },
  };
</script>
