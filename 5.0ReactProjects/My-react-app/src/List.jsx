import PropTypes from 'prop-types';

function list(props){

    const category=props.category
    const itemList=props.items
    
   

   
    {/*const fruits=[{id:1,name:"apple", calories: 95},
        {id:2,name:"Orange", calories: 45},
        {id:3,name:"Banana", calories: 105},
        {id:4,name:"coconut", calories: 159},
        {id:5,name:"pineapple", calories: 37}];*/}

    //fruits.sort((a , b)=>a.name.localeCompare(b.name))//Alphabetical order
    //fruits.sort((a , b)=>b.name.localeCompare(a.name))//for reverse Alphabetical order
    //fruits.sort((a ,b)=>a.calories-b.calories)//numerical
    //fruits.sort((a ,b)=>b.calories-a.calories)//for reverse numerical


    //const lowcalFruits=fruits.filter(fruit =>fruit.calories<100)
    //const highcalFruits=fruits.filter(fruit =>fruit.calories>100)
    
    const listItem=itemList.map(item =><li key={item.id}>
                                          {item.name}:&nbsp;
                                           <b>{item.calories}</b></li>)
    



    return(<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItem}</ol>
    
          </>)

}
list.propTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                             name: PropTypes.string,
                                            calories:PropTypes.number }))
}

list.defaultProps={
  category:"Category",
  items:[],
}

export default list