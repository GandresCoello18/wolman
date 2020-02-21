import React from "react";
import { Container, Image, Popup } from "semantic-ui-react";

const FinalHtmlCss = (props) => {
    return(
        <>
            <section id="area_final" className="border" style={{backgroundColor: "white"}}>
                <div className="final_header p-1">
                    <Popup
                            content="Andres"
                            key="Andres"
                            header="Andres"
                            className="mt-1 ml-1"
                            trigger={<Image src="https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg" avatar />}
                    /> Andres coello
                    <span style={{float: "right"}} className="p-2">20/10/2020</span>
                </div>
                <hr/>
                <div className="">
                    <Container>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi, animi iste corrupti modi, at quo labore sapiente cum, ad reiciendis nesciunt repudiandae odit vitae facere dolores eum veritatis optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum iure suscipit at rem aspernatur ullam impedit sunt repudiandae. Harum porro possimus laudantium, explicabo nostrum molestiae dolorum ipsam. Porro, officiis.
                        </p>
                        <Image src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-html-website-templates.jpg"  fluid/>
                        <p className="p-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, aut laudantium necessitatibus sed hic molestias harum voluptates error labore soluta non atque exercitationem, ex consequuntur animi doloremque quo, sequi odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laboriosam nemo magni explicabo velit soluta harum blanditiis id non assumenda minus distinctio quod ut quasi nisi itaque voluptate. Fuga, aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus, blanditiis sunt tenetur odio libero nihil eligendi, ad rerum hic perferendis nulla animi esse! Ullam voluptatum alias cumque dicta magni.</p>
                        <iframe
                            src="https://codesandbox.io/embed/6yo47owp9n?fontsize=14"
                            style={{width:"100%", height:"500px", border:"0", borderRadius: "4px", overflow: "hidden"}}
                            title="Semantic UI React Advertisement with Google Ads"
                            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                        ></iframe>
                    </Container>
                </div>

            </section>
        </>
    );
}

export default FinalHtmlCss;