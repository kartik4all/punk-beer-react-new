import  React  from 'react';
import { CardItem } from './cardItem';
export const Favourites = props => {
    const {filteredData,addToFav}=props
    return(
        <article>
   <section id="filteredDta" className="container">
      <article className="row">
     
          {filteredData && filteredData.map((item,index)=>{
              if(item.flag){
              return(
                <CardItem item={item} addToFav={addToFav}/>
              )
            }
          })}
  
      </article>
      </section>
        </article>
    );
};
export default Favourites;