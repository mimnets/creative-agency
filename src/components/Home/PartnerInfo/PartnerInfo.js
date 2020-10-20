import React from 'react';
import OurPartner from '../OurPartner/OurPartner';


const brandInfo = [
    {
        img: "https://1.bp.blogspot.com/-glsFqExm6Bw/X4dFKt3bNKI/AAAAAAAAoVQ/vkI1qYQ6GD8qdIEw30JbIIZ_9iGBpbpnQCLcBGAsYHQ/s0/uber.png"
    },
    {
        img: "https://1.bp.blogspot.com/-TpO6DM08nV4/X4dFKMPq2OI/AAAAAAAAoVM/40ppR8L678w-FwgCRA9Y4AjZfTf4GTojACLcBGAsYHQ/s320/slack.png"
    },
    {
        img: "https://1.bp.blogspot.com/-UokkDiD8CWQ/X4dFKJXsdZI/AAAAAAAAoVI/S60gsat5_oI6IEqA0XrIU4y1M7uu6JKBACLcBGAsYHQ/s320/netflix.png"
    },
    {
        img: "https://1.bp.blogspot.com/-tOBPTyZz_08/X4dFJJtcNlI/AAAAAAAAoU4/2evQ_C9ijbgkPrRpqC2lV878R9pnadouwCLcBGAsYHQ/s320/google.png"
    },
    {
        img: "https://1.bp.blogspot.com/-SThUgRCzYWs/X4dFJJ8O6FI/AAAAAAAAoU8/dDF6ZuuzBroXDpAMFZ8An_4pKsmoTOa_ACLcBGAsYHQ/s320/airbnb.png"
    }
]

const PartnerInfo = () => {
    return (
        <section className="d-flex justify-content-center mt-4">
            <div className="w-75 row">
                {
                    brandInfo.map(info => <OurPartner brand={info} key={info.img}></OurPartner>)
                }
            </div>
        </section>
    );
};

export default PartnerInfo;