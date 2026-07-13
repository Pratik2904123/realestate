import './listPage.scss';
import Filter from '../../../components/navbar/filter/filter.jsx';
import Card from '../../../components/navbar/card/Card.jsx';
import Map from '../../../components/navbar/map/Map.jsx';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

function ListPage(){
  const data = useLoaderData()

    return <div className='listPage'>
        <div className="listContainer">
            <div className="wrapper">
                <Filter/>
               <Suspense fallback={<p>loading...</p>}>
               <Await
          resolve={data.postResponse}
          errorElement={
            <p>Error loading posts!</p>
          }
        >
          {(postResponse) => postResponse.data.map(post =>(
            <Card key={post.id} item = {post}/>
          ))}
        </Await>
               </Suspense>
            </div>
        </div>
        <div className="mapContainer">
            <Suspense fallback={<p>loading...</p>}>
               <Await
          resolve={data.postResponse}
          errorElement={
            <p>Error loading posts!</p>
          }
        >
          {(postResponse) => 
          <Map items = {postResponse.data}/>}
        </Await>
               </Suspense>
        </div>
    </div>
    
}
export default ListPage;