


const FooterSection = () =>{

    const cssStyle = {minHeight:'35vh'};

    return(
        <footer class="bg-secondary">
        <section id="contact" style={cssStyle}>
        <h2>Contact</h2>
        <p>Feel free to reach out to me at <br/> <a href="" class="link link-info link-underline-opacity-0 link-underline-opacity-100-hover">vishnuupadhya99@gmail.com</a> </p>
        </section>
        <p class="p-2 text-center opacity-75">&copy; Vishnu Upadya 2024</p>
        </footer>
    )
}
export default FooterSection;