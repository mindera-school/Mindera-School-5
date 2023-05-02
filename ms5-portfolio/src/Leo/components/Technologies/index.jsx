import { useEffect } from "react";
import { useState } from "react";
import { Wrapper, Poster, GridHeader, Grid, TechCard, LanguagesContainer, HorizontalLine } from "./styled-components";

function Technologies({ isVisible }) {
    const [isVis, setIsVis] = useState(false);

    useEffect(() => {
        setIsVis(isVisible ? true : false);
    }, [isVisible])

    console.log(isVis);
    return <>
        <Wrapper>
            <Poster>
                <GridHeader isVisible={isVis}>
                    <h2>
                        Technologies that I use
                    </h2>
                </GridHeader>
                <LanguagesContainer>
                    <h3>Languages I know:</h3>
                    <img src="https://freepngimg.com/download/java/85390-java-language-text-programming-logo-programmer.png" />
                    <img src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png" />
                </LanguagesContainer>
                <HorizontalLine />
                <Grid>
                    <TechCard isVisible={isVis}>
                        <img src="https://logos-download.com/wp-content/uploads/2016/09/Sass_logo.png" />
                    </TechCard>
                    <TechCard isVisible={isVis}>
                        <img src="https://logowik.com/content/uploads/images/react.jpg" />
                    </TechCard>
                    <TechCard isVisible={isVis}>
                        <img src="https://brandslogos.com/wp-content/uploads/images/large/redux-logo.png" />
                    </TechCard>
                    <TechCard isVisible={isVis}>
                        <img src="https://cdn.worldvectorlogo.com/logos/styled-components-1.svg" />
                    </TechCard>
                    <TechCard isVisible={isVis}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnCKu1a97PCQjo4_5Zd39xvsXCE6EM4uBdgVe6Zo_zpAK_7C_w4CJ6SlII1Ml23wVlf4&usqp=CAU" />
                    </TechCard>
                    <TechCard isVisible={isVis}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" />
                    </TechCard>
                    <TechCard isVisible={isVis}>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-firebase-3521427-2944871.png?f=webp&w=256" />
                    </TechCard>
                </Grid>
            </Poster>
        </Wrapper>
    </>
}

export default Technologies;