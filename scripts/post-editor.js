const quill = new Quill('#content', {
  modules: {
    toolbar:{ 
      container:[
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline'],
      ['link', 'image','blockquote','code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ],
      // handlers:{
      //   image: selectLocalImage,
      // },
    },
  },
  placeholder: '',
  theme: 'snow',
});