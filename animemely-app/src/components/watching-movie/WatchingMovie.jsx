import React from "react";
import ListEpisode from "../common/ListEpisode";
import Comment from "../common/Comment";
import "../../style/watchingMovie.css" ; 

function WatchingMovie(props) {
  return (
    <div className="watching-movie">
      <div className="watching-status">
        <h2>kaguya-sama wa kokurasetai: ultra-romantic</h2>
        <h4>Đang xem tập 1</h4>
      </div>
      <div className="watching-video">
        <video
          src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.25447-2/10000000_383214983658372_4181518699748227945_n.mp4?_nc_cat=111&vs=9917607653bf7bfc&_nc_vs=HBksFQAYJEdJQ1dtQUNFTy1rd2lGd0JBR2w3SlZBYXZRYzZibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFDNW9hRW9IMUFDQUJ3c2JieGZDaFlBYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm6Ov36pXf1AEVAigCQzMYC3Z0c19wcmV2aWV3HBdAl3A%2FfO2RaBgpZGFzaF9pNGxpdGViYXNpY181c2VjZ29wX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCYgVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAEwEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNTQwMTkyMzQ0MTQxOTkwEm9lbV92aWRlb19hc3NldF9pZA82OTM0OTI2ODUyMzAzNjQVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzQ2NzgyNzk0ODQ1MjU5NhxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkEDE0MTUzMDUyMzIyNTE5MTQlAhwAJcQBGweIAXMEMTQ4MQJjZAoyMDIyLTA0LTA4A3JjYgEwA2FwcBBCdXNpbmVzcyBNYW5hZ2VyAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwgxNTAwLjA0MQJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=A-kNOvQNVUwAX-skItj&_nc_ht=video-ort2-2.xx&edm=APRAPSkEAAAA&oh=00_AT_EF3FVzPnk2Z-VYLEafKMMZhXodE-9strevbKn5DeJSw&oe=625DFE42&_nc_rid=843841442438872"
          controls
        />
      </div>
      <ListEpisode />
      <Comment />
    </div>
  );
}

export default WatchingMovie;
