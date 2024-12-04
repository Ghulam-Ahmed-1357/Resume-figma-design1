export default function Home() {
  return (<div >
    <div className="h-[67px] w-[1440px] mt-[-2px] "></div>
    <div className="w-[283px] h-[24px] justify-items-end justify-self-end ">
      <ul className="flex w-[283px] h-[24px] top-[66px] left-[1088px] gap-[34px] text-textcolor text-opacity-100">
        <li className="w-[43px] h-[24px] absolute top-[66px] left-[1201px] font-medium text-[20px] leading-[24.2px] text-left font-[Inter] cursor-pointer">Blog</li>
        <li className="w-[61px] h-[24px] absolute top-[66px] left-[1088px] font-medium text-[20px] leading-[24.2px] text-left font-[Inter] cursor-pointer">Works</li>
        <li className="w-[77px] h-[24px] absolute top-[66px] left-[1294px] font-medium text-[20px] leading-[24.2px] text-left font-[Inter] cursor-pointer">Contact</li>
      </ul>
    </div>
    <div className="w-[1030px] h-[308px] absolute left-[231px] top-[246px] justify-self-center flex justify-between">
      <div className="flex flex-col justify-between  ">
        <div className="w-[521px] h-[124px] font-[Heebo] font-[900] text-[48px] leading-[61px] text-left backdrop-blur-sm tracking-[2px] text-[#21243D]">Hi, I am John,
        Creative Technologist</div>
        <div className="w-[497px] h-[66px] font-[Heebo] font-[400] text-[16px] leading-[23.5px] text-left   text-[#21243D]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        <img src="/button.png" alt="Download Button" className="h-[50px] w-[205px] cursor-pointer" />
      </div>

      <div className="h-[299px] w-[292px]" > <img src="/hero-image.png" alt="Hero image"  /></div>  </div>
      <div className="h-[502px] w-[1440px] bg-[#F4E2E2] absolute top-[665px] text-textcolor font-[Heebo]">
        <span className="h-[32px] w-[120px] absolute top-[26px] left-[237px] font-[500] text-[22px] leading-[32.31px]">Recent Post</span>
        <span className="h-[32px] w-[77px] absolute top-[26px] left-[1168px] font-[500] text-[22px] leading-[32.31px] text-[#F98585] cursor-pointer">View all</span>
        <div>
          <div className="h-[356px] w-[483px] bg-[#FFFFFF] absolute left-[238px] top-[77px]">
            <div className="h-[286px] w-[391px] absolute top-[38px] left-[35px]">
              <p className="h-[107.53px] w-[383.56px] font-[700] text-[26px] ">Making a design system from scratch</p>

              <div className="h-[42.12px] w-[301.28px] absolute top-[90px] flex flex-row justify-between font-[Heebo] text-[18px] font-[400] leading-[38px] tracking-[0.02em]"><span className="text-textcolor text-opacity-[70]">12 Feb 2020</span> <span className="h-[17.5px] text-textcolor text-opacity-[67] absolute left-[129.06px]">|</span><span className="text-textcolor text-opacity-[70] absolute left-[161.47px]">Design , Pattern</span></div>

              <p className="h-[129.7px] w-[391px] absolute top-[156.31px] right-0 left-0  font-[400] text-[16px] leading-[23.5px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>

          <div className="h-[356px] w-[483px] bg-[#FFFFFF] absolute left-[763px] top-[78px]">
          <div className="h-[286px] w-[391px] absolute top-[38px] left-[35px]">
              <p className="h-[107.53px] w-[383.56px] font-[700] text-[26px] ">Making a design system from scratch</p>

              <div className="h-[42.12px] w-[301.28px] absolute top-[90px] flex flex-row justify-between font-[Heebo] text-[18px] font-[400] leading-[38px] tracking-[0.02em]"><span className="text-textcolor text-opacity-[70]">12 Feb 2020</span> <span className="h-[17.5px] text-textcolor text-opacity-[67] absolute left-[129.06px]">|</span><span className="text-textcolor text-opacity-[70] absolute left-[161.47px]">Design , Pattern</span></div>

              <p className="h-[129.7px] w-[391px] absolute top-[156.31px] right-0 left-0  font-[400] text-[16px] leading-[23.5px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      
      </div>
      <div className="h-[934.2px] w-[919px] absolute top-[1246px] left-[237px] font-[Heebo] ">
        <span className="h-[32px] w-[153px] text-textcolor font-[500] text-[22px] leading-[32.31px]">     Featured works</span>
        <div>
          <div>
            <img src="/feature1.png" alt="image1" className="h-[180px] w-[246px] absolute top-[64px] " />
            <img src="/feature2.png" alt="image2" className="h-[180px] w-[246px] absolute top-[355px] " />
            <img src="/feature3.png" alt="image3" className="h-[184px] w-[246px] absolute top-[646px] " />
            
          </div>
          <div className="h-[896.3px] w-[663.46px] absolute top-[19px] left-[255.54px]">
            <div className="h-[272.1px] w-[623.46px] absolute top-[20px] left-[20px]">
              <p className="h-[44px] w-[305px] text-[30px] font-[700] leading-[44.06px] text-textcolor absolute top-[20px] left-[20px]">Designing Dashboards</p>
              <div className="h-[37px] w-[68px]">
                <img src="/2020.png" alt="image" className="h-[37px] w-[68px] absolute top-[75.1px] left-[21.46px]" />
                {/* <div className="h-[37px] w-[68px] absolute top-[75.1px] left-[21.46px] "></div> */}
                </div>
              <span className="h-[29px] w-[97px] absolute top-[72.1px] left-[112.46px] leading-[29.38px] text[20px] font-[400] text-mycolor ">Dashboard</span>
              <span className="h-[170px] w-[622px] absolute top-[122.1px] left-[21.46px] text-[19px] font-[300] leading-[26.44px] text-wrap text-mycolor1 gap-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
            </div>
            <div className="h-[272.1px] w-[623.46px] absolute top-[312.1px] left-[20px]">
              <p className="h-[44px] w-[305px] text-[30px] font-[700] leading-[44.06px] text-textcolor absolute top-[20px] left-[20px]">Designing Dashboards</p>
              <div className="h-[37px] w-[68px]">
                <img src="/2020.png" alt="image" className="h-[37px] w-[68px] absolute top-[75.1px] left-[21.46px]" />
                {/* <div className="h-[37px] w-[68px] absolute top-[75.1px] left-[21.46px] "></div> */}
                </div>
              <span className="h-[29px] w-[97px] absolute top-[72.1px] left-[112.46px] leading-[29.38px] text[20px] font-[400] text-mycolor ">Dashboard</span>
              <span className="h-[170px] w-[622px] absolute top-[122.1px] left-[21.46px] text-[19px] font-[300] leading-[26.44px] text-wrap text-mycolor1 gap-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
            </div>
            <div className="h-[272.1px] w-[623.46px] absolute top-[604.2px] left-[20px]">
              <p className="h-[44px] w-[305px] text-[30px] font-[700] leading-[44.06px] text-textcolor absolute top-[20px] left-[20px]">Designing Dashboards</p>
              <div className="h-[37px] w-[68px]">
                <img src="/2020.png" alt="image" className="h-[37px] w-[68px] absolute top-[75.1px] left-[21.46px]" />
                {/* <div className="h-[37px] w-[68px] absolute top-[75.1px] left-[21.46px] "></div> */}
                </div>
              <span className="h-[29px] w-[97px] absolute top-[72.1px] left-[112.46px] leading-[29.38px] text[20px] font-[400] text-mycolor ">Dashboard</span>
              <span className="h-[170px] w-[622px] absolute top-[122.1px] left-[21.46px] text-[19px] font-[300] leading-[26.44px] text-wrap text-mycolor1 gap-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[243px] w-[1440px] absolute top-[2239px] ">
        <div className="h-[30px] w-[279px] absolute top-[49px] left-[578px] flex flex-row justify-between">
          <img src="/fb.svg" alt="facebook" className="cursor-pointer h-[30px] w-[30px]"/> 
          <img src="/insta.svg" alt="intsagram" className="cursor-pointer h-[30px] w-[30px]"/>
          <img src="/Group.svg" alt="twiter" className="cursor-pointer h-[30px] w-[36.92px]"/>
          <img src="/Linkedin.svg" alt="linkedin" className="cursor-pointer h-[30px] w-[30px]"/>
          </div>
        <div className="h-[32px] w-[354px] absolute top-[115.67px] left-[543px] font-[Heebo] font-[500] text-[22px] leading-[32.31px] text-textcolor text-opacity-100">
        Copyright ©2020 All rights reserved 
        </div>
      </div>
  </div>
  );
}