import React from 'react';
import { Jumbotron as Jumbo, Container} from  'react-bootstrap';
import styled from 'styled-components';
import jolyn from '../img/jolyn.jpg';

const Styles = styled.div `
.jumbo {
 background: url(${jolyn}) no-repeat fixed top;
 background-size: cover;
 color: #15104B;
 height: 700px;
 position: relative;
 z-index: -2;
 
}
.text {
    width:50%;
    font-size: 25px;
    font-family: Verdana;
    text-align: justify;
    color: #000000;
}

`
;

const Jumbotron = () => (
    <Styles>
<Jumbo fluid className ="jumbo">
<div className = "overlay"></div>
<Container  >
<div className = "text">
<h1>..TombstoneKiller
BONES..</h1>
<p > 
[Chorus]
Dying in the late afternoon, I slowly slip away
Waking up in the afterlife, I knew it was a dream
Dying in the late afternoon, I slowly slip away
Waking up in the afterlife, I knew it was a dream

[Verse]
Death hit me hard, like an eighteen wheeler
Graveyard God, it's the tombstone killer
Raindrop diamonds, I can change the weather
Baby, you can stand under my umbrella, ella, ayy
Fuck what they say
Dead man walking right back to my grave
Crosshair aim straight to the brain
Hangin' out the sunroof, smoking in the rain

[Chorus]
Dying in the late afternoon, I slowly slip away
Waking up in the aftеrlife.
</p>
</div>
</Container>
</Jumbo>
</Styles>
)

export default Jumbotron;