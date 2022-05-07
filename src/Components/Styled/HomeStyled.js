import styled from 'styled-components';

export const HomeMain = styled.div`
   .fluid-container {
      .container {
         max-width: 1100px;
         margin: 0 auto;
      }
   }
   .headerLine {
      border-width: 10px 0 0;
      border-top-style: solid;
      border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
   }
   .footerLine {
      border-width: 10px 0 0;
      border-top-style: solid;
      border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
   }
   .heroCont {
      padding: 2rem 2rem;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 45px;
      max-width: 96rem;
      margin: auto;
      color: #000;
      font-weight: 500;
   }
   .borderBottom {
      border-bottom: 1px solid #eee;
   }
   .link-next {
      position: absolute;
      left: 16rem;
   }
   @media screen and (max-width: 1600px) {
      .link-next {
         position: absolute;
         left: 4rem !important;
      }
   }
   .links-right {
      display: flex;
      justify-content: space-between;

      ul {
         display: flex;

         li {
            padding-right: 20px;
            list-style-type: none;
            a {
               text-decoration: none;
               padding: 10px;
            }
         }
      }
   }

   .scroll-top {
      font-weight: 600;
   }

   .hero-section {
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 500px;
      .heading {
         max-width: 736px;
         text-align: center;
         margin: auto;
         padding-top: 4rem;
         padding-bottom: 4rem;

         img {
            height: 105px;
         }

         h1 {
            color: #fff;
            font-family: inherit;
            font-size: 80px;
         }

         p {
            color: #fff;
            font-family: inherit;
            font-size: 18px;
            margin-top: -15px;
         }
         button {
            border: 2px solid #ffffff;
            font-family: Poppins, sans-serif;
            box-sizing: border-box;
            border-radius: 50px;
            background: #cb3837;
            color: #ffffff;
            min-width: 240px;
            min-height: 50px;
            margin-top: 20px;

            a {
               text-decoration: inherit;
               color: #fff;
            }
         }
      }
   }

   .about-heading {
      h2 {
         font-weight: 400;
         font-size: 18px;
      }
   }
   .pb-40 {
      padding-bottom: 40px;
   }

   .my-liks {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 15px;
      a {
         font-size: 24px;
         color: #fff;
      }
   }

   .mtb-0 {
      margin: 0px;
   }
   .sec-1 {
      overflow: hidden;
      .bg-patern {
         position: absolute;
         left: 0;
         top: 0;
         z-index: 0;
         width: 100%;
         max-height: 460px;
         object-fit: cover;
         opacity: 0.4;
      }
      .img-me {
         width: 150px;
         position: relative;
         z-index: 1;
         margin-top: 150px;
         filter: grayscale(1);
      }
      .myDesc {
         padding: 20px;
         position: relative;
         z-index: 1;
         h1 {
            display: inline-block;
            font-weight: 900;
            font-size: 75px;
            line-height: 1;

            background: linear-gradient(270deg, #ff0000, #6000ff, #ff7e00);
            background-size: 600% 600%;
            -webkit-animation: titleAnim 20s ease infinite;
            -moz-animation: titleAnim 20s ease infinite;
            animation: titleAnim 20s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
         }
         h2 {
            font-weight: 800;
            font-size: 46px;
            position: relative;
            bottom: 10px;
            background: linear-gradient(270deg, #ff0000, #6000ff, #ff7e00);
            background-size: 600% 600%;
            -webkit-animation: titleAnim 20s ease infinite;
            -moz-animation: titleAnim 20s ease infinite;
            animation: titleAnim 20s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
         }

         .my-position {
            display: block;
            color: #b6b6b6;
            font-size: 20px;
         }
      }
      .container-ash-bg {
         .tech-info-bg {
            /* background-color: #fff4f454; */
            background-color: #fff4f4ab;
         }
      }

      .tech-info {
         margin-top: 20px;
         margin-bottom: 80px;
         p {
            font-size: 19px;
            font-weight: 200;
            max-width: 632px;
            margin: 55px auto;
            color: #bababa;
         }
         .tech-stack {
            max-width: 740px;
            margin: 0 auto;
            .ts-grid {
               display: grid;
               grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
               row-gap: 50px;
               column-gap: 20px;
               .ts-list {
                  text-align: left;
                  h3 {
                     font-size: 21px;
                     margin-bottom: 30px;
                     font-weight: 600;
                  }
                  .ls-li {
                     display: flex;
                     align-items: center;
                     gap: 10px;
                     margin-bottom: 18px;
                     color: #afafaf;
                     img {
                        height: 23px;
                        min-width: 35px;
                        object-fit: contain;
                     }
                     label {
                        span {
                           font-size: 13px;
                        }
                     }
                  }
               }
            }
         }
      }
   }

   .sub-head {
      font-size: 41px;
      padding: 40px 0;
   }

   .proj-img {
      border-radius: 12px;
   }

   .pointer {
      cursor: pointer;
   }

   .prev-link {
      font-size: 13px;
      color: #333;
      font-weight: 500;
      text-decoration: underline;
      cursor: pointer;
      margin-top: 15px;
   }

   .mt-5 {
      margin-top: 5px;
   }

   .sec-2 {
      .pr-sec {
         padding: 20px 0;
         .ps-info {
            color: #fff;
            padding: 30px 0;
            h4 {
               font-size: 29px;
               font-weight: 300;
               margin-bottom: 15px;
               color: #000;
            }
            div {
               p {
                  font-weight: 200;
                  font-size: 16px;
                  color: #aaaaaa;
               }
            }
            a {
               cursor: pointer;
            }
            img {
               margin: 20px 0;
               width: 100%;
               max-width: 582px;
            }
         }
      }
      .soon-text {
         font-size: 18px;
         padding-bottom: 15px;
         font-weight: 500;
         color: #333;
         padding-top: 15px;
         background: #fff8f8;
         box-shadow: 2px -2px 2px #efefefee;
      }
   }

   @media only screen and (max-width: 600px) {
      .bg-patern {
         width: 100% !important;
         height: 100%;
         max-height: 520px !important;
      }

      .soon-text {
         font-size: 15px !important;
      }

      .tech-info {
         p {
            padding: 0 10px;
         }
      }
      .tech-info {
         margin-bottom: 20px !important;
      }
      .ts-grid {
         padding: 12px;
         grid-template-columns: repeat(2, 1fr) !important;
         .ts-list {
            text-align: center;
            .ls-li {
               font-size: 15px;
               gap: 6px;
            }
         }
      }

      .heading {
         a {
            h1 {
               font-size: 50px !important;
            }

            p {
               margin-top: 0px !important;
            }
         }
      }

      .about-heading {
         padding-bottom: 60px;
      }

      .heroCont {
         margin-left: -3.5%;
      }

      .ts-grid {
         padding-bottom: 30px;
         padding-left: 15px;
         padding-right: 15px;
      }

      .link-left,
      .link-next {
         display: none;
      }
      .sec-2 {
         .pr-sec {
            padding: 15px !important;
            .ps-info {
               div {
                  p {
                     font-size: 15px;
                  }
               }
            }
         }
      }
   }
`;
