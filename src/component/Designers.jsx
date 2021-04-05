import React from 'react'
import member1 from './images/team1.jpg'
import member2 from './images/team2.jpg'
import member3 from './images/team3.jpg'


function Designers(){
    return(
        <div class="designers">
				<h2>Designers</h2>
				<hr/>
				<p>Финансовые проблемы в семье начались, когда Керри учился в школе. Когда его отца уволили с работы, всей семье пришлось переехать в Скарборо, где Перси нашёл себе работу охранника на фабрике «Титановые колёса» в пригороде Торонто, производившей стальные ободы и шины. Там же приходилось работать и всей семье Керри. После школы Керри и его сестрам и брату приходилось делать уборку, мыть полы и унитазы. В это время Керри становится замкнутым ребёнком.</p>


				<h3>Our designers are thoughfully chosen:</h3>
				<div class="teammate">
					<img src={member1} />
					<div class="description">
						<h3>John Doe</h3>
						<p class="position">CEO & Founder</p>
						<p>Phasellus eget enim eu lectus fauclibs vesitbulum.Suspendisse sodales pellentesque elementum.</p>
					</div>
				</div>
				<div class="teammate">
					<img src={member2} />
					<div class="description">

						<h3>Jane Doe</h3>
						<p class="position">Designer</p>
						<p>Phasellus eget enim eu lectus fauclibs vesitbulum.Suspendisse sodales pellentesque elementum.</p>

					</div>
				</div>
				<div class="teammate">
					<img src={member3} />
					<div class="description">
						<h3>Mike Ross</h3>
						<p class="position">Architect</p>
						<p>Phasellus eget enim eu lectus fauclibs vesitbulum.Suspendisse sodales pellentesque elementum.</p>


					</div>
				</div>
				</div>
    )
}
 export default Designers;