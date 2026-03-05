const featuresData = [
    { id: 1, title: "AI Powered", desc: "Built in smart suggestions for your collection" },
    { id: 2, title: "Easy Comparison", desc: "Look at different watch options"},
    { id: 3, title: "Trusted by Community", desc: "Look at different user reviews"},
    { id: 4, title: "Feature 4", desc: "deescription!"}
]

//this is our child component, as this component is used within the parent component
//in passing props, the parent component is the one passing props to the child function
//format: function ChildComponent ({ prop1, prop 2 })
function FeatureCard({ title, desc }) {
    return(
        <div className="card">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}

export default function Features() {
    return(
        //map function foirmat
        //dataArray.map((object) => (
        //    <ChildComponent 
        //        key={object.id}
        //        prop1={object.prop1}
        //        prop2={object.prop2}
        //        ...
        //    />
        //))
        <section className="features">
            <h2>Why Choose Us?</h2>
            <div className="card-grid">
                {featuresData.map((feature) => (
                    <FeatureCard 
                        key={feature.id}
                        title={feature.title}
                        desc={feature.desc}
                    /> 
                ))}
            </div>
        </section>
    );
}