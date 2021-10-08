import React from 'react'
import CountUp from 'react-countup'
const Counter = () => {
    return (
        <>
            <div id="main" class="alt">
                <section id="one">
                    <div class="inner">
                        <div class="row">
                            <div class="col-3 col-12-medium numberCounter">
                                <h2><CountUp end={758} duration={5} delay={3}/>+</h2>
                                <p>Cup of Tea</p>
                            </div>
                            <div class="col-3 col-12-medium numberCounter">
                            <h2><CountUp end={81} duration={5} delay={3}/>K</h2>
                                <p>Working Hours</p>
                            </div>
                            <div class="col-3 col-12-medium numberCounter">
                                <h2><CountUp end={238} duration={5} delay={3}/>+</h2>
                                <p>Software</p>
                            </div>
                            <div class="col-3 col-12-medium numberCounter">
                                <h2><CountUp end={8.4} duration={5} delay={3}/>+</h2>
                                <p>Years</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Counter
