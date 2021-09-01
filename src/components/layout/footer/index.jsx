import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote"> I am 6'2" and 200 lbs. I am a Caucasian male and a father of 2 </p>
						</div>
					</FooterBody>
					<div className="box">
						<CopyRight className="text-dark">
							© 
							<span> {new Date().getFullYear()}, Built with {` `} 
								<a href="mailto:cwcwebdevelopment@gmail.com">CWC Web Development LLC.</a>{" "}
          					</span> 
							Copyright 2021 by {data.SiteAuthor} 
						</CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;