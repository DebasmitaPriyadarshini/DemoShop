import React from 'react'
import { Link } from "react-router-dom";

const Store = (props) => {
    const {store,index} = props
    return (
        <>
         <div key={store._id} className="border-for-store">
             
             <div className="Galleries-gridCover-j9D">
               <div className="ProjectCoverNeue-root-166 ProjectCoverNeue-statsVisible-19j ProjectCover-cover-3zh">
                 <div className="Cover-cover-2mr ProjectCoverNeue-cover-3Ni e2e-ProjectCoverNeue js-project-cover e2e-ProjectCoverNeue-cover ProjectCoverNeue-coverWithFlags-1Aq ProjectCoverNeue-statsVisible-19j ProjectCoverNeue-loaded-26R">
                   <div className="Cover-wrapper-300 ProjectCoverNeue-wrapper-27j e2e-ProjectCoverNeue-wrapper">
                     <div className="Cover-content-2R2">
                       <div className="DominantColor-dominantColor-2PM"></div>
                       {/* <img
                           sizes="404px"
                           style={{ padding: "10px" }}
                           src={product.productPictures[0].img}
                           alt="Children's Day - ''SEE ME&quot;"
                           loading="lazy"
                           class="ProjectCoverNeue-image-1MZ js-cover-image"
                         ></img> */}
                       <div className="ProjectCoverNeue-controlsAndPrivacyContainer-20r"></div>
                     </div>
                   </div>
                 </div>
                 {/* /////// */}
                   <Link to={`/${store._id}/store`} key={store._id}>
                 <div style={{ padding: "10px" }}>
                   <div className="Cover-overlay-28e Cover-showOnHover-Ks- Cover-transitionDone-22y">
                   </div>
                   <div className="ProjectCoverNeue-visibleStatsAndOwners-2Av">
                     <span className="ProjectCoverNeue-ownersContainer-3Go">
                       <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                         <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                           <a className="Owners-owner-2lB e2e-Owner-user-link">
                             {store.shopName}
                           </a>
                         </span>
                       </div>
                     </span>
                     <div className="Stats-stats-1iI">
                       <div className="Product__priceFlex">
                         <div
                           className="Owners-owner-2lB e2e-Owner-user-link"
                           style={{ marginBottom: "20px" }}
                           // onClick={() => showProductDetailsModal(product)}
                         >
                           Walk in Store
                         </div>
                       </div>
                     </div>
                   </div>
                   <span className="ProjectCoverNeue-ownersContainer-3Go">
                     <div className="Owners-root-3c9 Owners-dark-1Vh Owners-overflowText-3Yn ProjectCoverNeue-owners-1qo">
                       <span className="js-mini-profile Owners-ownerAndAvatar-1d5">
                         <a className="Owners-owner-2lB e2e-Owner-user-link">
                           {/* By -{product.createdBy.shopName} */}
                         </a>
                       </span>
                     </div>
                   </span>
                 </div>
                 </Link>
                 {/* ///////// */}
               </div>
             </div>
         </div>
        </>
    )
}

export default Store
