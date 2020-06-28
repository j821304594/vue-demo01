let data = {
   'a-table': {
      columns: [
         {
            'title': 'Name',
            'dataIndex': 'name',
            'key': 'name'
         },
         {
            'title': 'Age',
            'dataIndex': 'age',
            'key': 'age'
         },
         {
            'title': 'Address',
            'dataIndex': 'address',
            'key': 'address'
         },
         {
            'title': 'Tags',
            'key': 'tags',
            'dataIndex': 'tags',
            'scopedSlots': {
               'customRender': 'tags'
            }
         },
         {
            'title': 'Action',
            'key': 'action',
            'scopedSlots': {
               'customRender': 'action'
            }
         }
      ],
      dataSource: [],
      children: []
   }
};

export default data;