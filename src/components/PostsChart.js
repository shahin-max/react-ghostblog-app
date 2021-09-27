import axios from "axios";
import React from "react";
import { Bar } from "react-chartjs-2";


function PostsChart()
{
    const url = "https://ghost-blog.ipxp.in/ghost/api/v4/content/posts/?key=8196190b08906dda0ebf6e6f5d";
    let noOfPosts = [0,0,0,0,0,0,0,0,0,0,0,0];
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const [chartData, setChartData] = React.useState({});

    React.useEffect(() => 
    {
        axios.get(url).then((response) => 
        {
            for (const post of response.data.posts) {
                noOfPosts[post.published_at.slice(5,7)-1]++;
            }
            setChartData({
              labels: months,
              datasets: [
                {
                  label: "Number of Posts",
                  data: noOfPosts,
                  backgroundColor: ["rgba(137, 196, 244, 0.6)"],
                  borderColor: 'rgba(30, 139, 195, 1)',
                  borderWidth: 2,                
                }                 
              ]             
            },
            );
          });
    }, []);

    return (
    <div className='lower-boxes'>  
    <p className = 'heading-bottom'>Posts Chart Per Month</p> 
    <div className='chart'>
        <Bar data={chartData} options={{
              plugins: {
                legend: {
                  display: false
                }
              },            
            responsive: true,
            maintainAspectRatio : false,
            scales: {
                x: {
                    grid:{
                     display:false
                         }
                   },
                y: 
                   {
                 grid:{
                  display:false
                      }
                   }
                       }
              
          }}/>
      </div>
    </div>
    );
}

export default PostsChart;

