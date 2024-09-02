import { Features, FlashScript, Footer, Header, Hero, Testimonial,  } from "./components"

const App = () => {

    return (
        <div className="w-full">
            <section className={`w-full | bg-primary-dark-purple |  | `}>
                <Header />
            </section>

            <Hero />

            <Features />

            <Testimonial />

            <Footer />
            
            <FlashScript />
        </div>
    )

}

export default App