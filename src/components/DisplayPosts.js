export default function DisplayPosts(props)
{
    return(
       <div>
            {props.posts.map(function(element, keys){
                    return <li keys={ element.key }>{element.postName}</li>;
                  })}
       </div>
   );
}