
$.ajax({
  url:'/api/list',
  success(data){
    let tstr = `
      <ul>
      {{each data}}
        <li > {{$value}} </li>
        {{/each}}
      </ul>
    `
    const str = template.render(tstr,{
      data:data.data
    })
    console.log(data);
    $('#list').html(str)
  }
})
