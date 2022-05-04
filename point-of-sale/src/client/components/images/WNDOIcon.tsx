import React, { FC, SVGProps } from 'react';

export const WNDOIcon: FC<SVGProps<SVGSVGElement>> = ({ width = 32, height = 32 }) => {

  return (
    <svg
    width={width}
    height={height}
    fill='none'
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id="ee-background"
        fill="#fff"
        fillOpacity="0"
        d="M0 0H84V84H0z"
        pointerEvents="none"
      ></path>
      <image
        width="32"
        height="32"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAAEdFJREFUeF7tnQl4FGWagN/qTjgCiLCCkDvdIh0OUUwIAYWgiOfsjrNo1N111nG8xlXGleWSKxASkpDggILHeBNAFI+R2WfGWRXEC0R0RRKUhFsHjxlEISFX9zxfVVd3dXVVd8PQ4Ej+58mT7vq/76+/3vq+///+o6oV7JKrR3fuGlfIpUOH4XB0CBHz+hT1u4L2P5gUOQj+/MBxxS/nlSz/Z5FxAF5NStGPG2T9Geq/gJ5fHmM5+on0Y/7vir8eXqvjUlVTPQN1MBz3yQX5dvPS5o2sWPcsH3952JaZisScbivI4aHb1wFJkRRP3by2LxgzK4+1dfusGIQC/WzBKvqlXnPqwjqKK6946SYmrXzSrBEE+mnlSs5OKTyKIk950cS71/6qZfFDS01tHnDL6FweuWPjKU/oGABcl7vn5pWbJj0eaMW1Bn/FQVBOO4byTnmVq17tx5o3XruB+ZNWqH0rvXp15avF31uTcTDpiXNI/SIJxQcOn9atS+co3xWvfNY6dS1f+67mi5ya75eVjlPP9/rLiiZr1Pd/Vist5/Jq5al1CtRFUc8ZsBZ/nqqjHtdkA9/99Qx+9/fSXn/4IuUCX7ga+NelbwQjkhBYCstvv5Ybfp+WxL59jQqlV1/DlMJV4UAVDijXqkHNKxOgPkOT8HNRz6R+1v+0+so1Bv7LNes6Ybp+OSlfDVJi1A07v7lOctkW5/XzDAR0/vuhnjeQZ6Gry51+BKoLn7W0u6+UQnpv+Xotg3uPUagpKyY74z6z5KD30nkzP5+enwNOYEfdWv68bxeKZpP4fD71sxeJ1Hzg8+Fz+FB8/nwleFzNV3yipeb7FC+KN1xHL08t26Qj9q/q6nbuU+9FaH3ER/y6vjbNZ6QsXUfKlO+6nlofv00rPq+a5xAd//UoDh9tPh8J+Gg75ONnhx4FX0czq31KIak7gSzFoVBbtgBPxr1moYvecDOzPIcCCQw8WT34dte3p3yD6Vt5COhiCbQGuOycngq15RV40idaAb13aQ5Xzm/cjTsp85SHqbZZ1kD3KoWkbQWuHdTPHuhaN/cuEaCHt+LuOqgdaAxAZ//aExHoxCU5XNEONGhLkSz0E+DRYo9CTUU52Wn/Y7bAgrVuJrUDDcUSG9CycrIz2oHG0qZFA/p0JAtd52bSAzlcUXa4BnfXgbGc70cvEw1odWm2wrbyMvqnTwpz+XUuJj+Qy+XtQGNrQ7cAyyMAHbXOxdR2oLG3oQL0yUhA33QxdXG7hYYQjeTyAvSZ4gEK2yrm0z9tstnlRwnQRblcXtFQi6vLgB99+xjLBcYGtGw+/TPagR4/oNYWesGbLqb/JpfLFrRbaIB1JAv9GHiqdKCMlErxpE8x36CR67OYcf+wdqBGMMcHaOM2XEnZsXjEj14mKtCiKBa6cBiXVbYDjdnlq+cOUqitKMGTNtVsXSPWZzFr4TAuXdC4DXe7hap8bCx0j1JI+v9LYB8L0HYLNY6UZO2tq9n4YgKa/1Yms6vyuDT+QB18WvEUZ6dcDQ5ZbLFIpq00odF2+O4XLd/u+LHmSXmydygsmYCWz8OTPs0sFQC6oPFT3EmeOHU4Cr6Vsleoc5zKPyHFBoA+UzRYwiZLoHlvZTK3Mo9xlXEEuva+eYweHHYzTwiF43iS2IC+ncncBXEG6luxA5Ss43htJ6Wo3UohGR8By0oG2y4j550YoHtASTspFI7jSQNAn5p7jiyBFJOdFrYubwD6Ge6k/sfx/IZes3o3ONPjUvYJLDQAdIUK1HqjQ847mZRUqC4fR6DLd4HDvyflBBI4zqcyAS2fS3b6dPM5BGhpRR6XxBXoip2g/MOv+Qfb0KIhCjV2QDMoLRvOJQvjaaE/IqAfAtWxAd2OO+ns4+wlWnE/pl4+CLRiDtlpM8zAhr6TQZlmoe1Ao1iT6vIC9Jm550ovbwn0vHczqJg/nLFxBVpdD05XVOsveR6W/NFebPeD4Ax9UEUVvr4K1teG6+17xHpken0lrN9mfR4ZeO592HL0aQJaNofsjDALPUFA68Dpjgo08Xpo9e+UNQs7FGhTNw+Hpsf+BL98LPx4ggItFvKr34Hxi+yrsqUUBlmPQUKBbi0vYkD6THNJKtDS4Yy9P54uv7wOHNGBHm6wv9AEB3TsFJ5vp+N0QKejkJeSxTqT7J8yUoFuBlYUnadgA3TIuxlUCtCFjXWcldQvqhUdi4Cvejs4z4qqWv85fNfg3x5tkFafMQOGmqp35AjU7A0K6nL6EbM8bbB5h5ZrlpVj/fpCt7BZu0D5u5RCMqMCfS+DyhLVQutwxwvosu2QEB1oxxug2bB53ngHuiXCV7+VJ/GgY4JGxHkDyAZpqyRyDU8a5B2QdQfsOmAt39EJ3wYe8gjV82uYgFbMZkDaLHNpQ97LoKpkOBfHFejyz8AR2fq9LZDwH/ZGPPEn8ItLQNpGVw/InQIfWj7kppVRMACW3A6Jfvl5L8LM1fblb6qAJMMu8NM7Qp9uIZ2TCWjZbAZkhAGVPfa/Kc7n4kXxtNDln4IjxhjXB98cguY2G0tKgH+S3drGeWUffNcIh5rDdTokwBkW8t83wvcW8lKCtL+9ksAhnhBMAaCr5g5V2GoNdOCGdBbNVYHW406K7pZRG0ILAV/1NnBGn3gZ/Gs40hLehkqRWb3gTxKkKPDyRpj4jLWc8fR10psr0NgEgw274c3t55KbYdwQg6ZM2IcvBKhAPwCeE6C1lbPwpMw2X+4PBqi4vDOCyy++Ca7MgW8OwrAY5qrPOgNeLQKnAu477cOxPBesMDzLIeFZcjdITAyzDBPQill40k4S0OW14Ii8vLL/L/DiRmjzwtcN2n9jun605oovvg3dO2qdhjw5c7gFvmvSPhvT+f0gOxW21MNXB0BAiUxTGxxoDHZm/14Qao1nJFk0EVrBAaAri86XZWRboIvn5nNRfF2+FpwxrFcJRK/WFpo7e/WhMQU6OEHaRT01NkOLTWQgECV+7WSwtuZWaGrVmgu9TL0skU+SkZjlGp0Z6IKZeFKLzHbs2ZDOkjn5XPRA4w5cSdGD72NqQ5fVQELkXSltzZBwo33payZCxe9g3Wex1aBHB/jDdMgLG8sE9T+thIxewe8dHKCEdkRhndIm4AXVQstn4kk/SUCrt4Iz8lbJ5Wvh3x6yh3XvVVC5JjaYInXnOHjwVXv5omvg2gv8+WL5DkjvDgnhbadeiOryAvT5+TkKtSfTQmMAqtbaBy2tsO8gyBOH5iQuKrFhl45wsAG+sRhV6Tp6T969E/TqAuLqX3wPrfqrOgyFS1PSuwt0laGq/TJ/KNCaihlkp82xcvmlc/IZE1eXX/4JOKI8EOGFkhdAHu20gqlX3OnUrllk1MdAoySHQ+uQZETl9ctn9oYbR5kUrUOlEJd3FJL5vm6hNkDP3pjGw0UjTj7Q1z6CsfOj4Tk++XuXap2VnsSKO4c9Kxt2rl0CVF7f8Ny8XIWayhlkp4RZaL+NaTwiQBc37sSdFH3O8lguybt6C0pL5Mcef1oKG+o1S2qxGSXJuSWujGTB5vqJdUrSx/zP3APuPkGpzomQ0d3/KHbki1NdXixUA7pgOtmpc80qKtBZIxjzYByB1lV9jDt5cEz3ornZH1daSAucRIcWS8aaZNJDwiqrSRRpO0/vBAn2PXuIy4cCnT+d7ExLoI/OGkFBPIHWV32EK9k4tgvH8bq4fFmsmLQeOfcsWC1jwRjTraNhyS+Dwqr12uxbsygy4PKr5w+ztVDXxjQejzvQhR/i6ntuxMsecg98/OfYyAiHmkUwcIL99J25pB6dYEN5KMwzu0LX2PevGdrQPFlTuo/stGLzebLeT+OJmaqF7sKdFJ/9R3VVm3EnnxeR1vZ92tDwwBH4S2NwKKm/PMT4crDknlonUm+6AVay+rHMPiA9vp4spuei3c0A0BdKh0undB/ZKScHaP3CTbj6nh+xwq3NcKgRmrzQamoj9WGiXkAv/4t9ZMquyT87pced5jBSD2d7G14GJG1nori69RDTrp4GC823BZr+fhpPzxhBwZK4Wuj7uJNzIgI9fyJsjjBhrCsXXwN3X6596/df8GWEdShd57Fb4ZrhwdPLXEBHGRFF2qsbXtsA0OfnjVSonT8NT+Y8s1japjSWTR/B6HgCrV+4EVff3IhAleuieRyM7g8P/UqTE8sbMCG6ztiBsPjWoJyEXandY4o7zYUHgK4qvUChtmoanuSTBLRqA67kYdGv3gdfH4KGluiiItGlA5zRGfYfii2UEoOUqb/usrJ5dNYpp9vpLCTrPeDZeRfK5Mg0POkWQFNZNn2kWGj8XuKyo/JdslIMPmfB68ZFsHN/+LSd3gbKFNzrxpkjBe54BD7ZG+zpdVmdVWICrDWu+vhfHHUMME1ARyvUlk7Fk1VivpS+m1JZOW0kox+KJ9Cqd8hKzv+7XH5LJZxmCHFkhHPmLZGXQd4vhd4yCvInseiw9ajYnEGkVJffoC6BFCjULpyKp28Y0D4fpLJq6khGxRNoXdXbuJNH2Fa96QjMWqXB+fZIeC9/eQ4MMuzXldFS324wx68joVabKTLI6w+jDPMxopNxesTpuWhoVaDi8s8Vj5EZ+6l40k4O0PrK9bhS9MlHm3prLwLjkMAxTd2Zn7YR9w/M2otOU/iSSZhOAnSw2BcVjaIhX4D2fxeani++WKG2ZAoeV6lZ32Che3AnxWeX8Y6qN8lKvvCYXP7mUbD0lqCqDBdlCk/aQbu9UJk94DPD/iWjzlEANItKpzTkbfjuuTljFWrvn4Knz8kBWl+5DleKeQIyWN/mJrj/f7XR0V8bgmvyAu6WcUE5GfVIG6i3g+Uv+kdXDaG9/G2XaetPeurZGXrJFpuj79mNUAVo7lvwze+KL5E4dAqezDCgPTen8tLkkYx6uDF+FlpX9QbuZFlejJx8bbD72+Csulk6KRGSZcRjHOGIzkH7Kb9OCZAqOrFPgthVUoDmr4f9L88Zp1CzaDLZvcNmcAXoy5NHcmE8gW6vfJ2zUsZE46m2oQLVLikC0jxclPZW3kput8fJSid6TawkpA0d+RZ8/krRpQo11ZPJdloATeHlyRdw4SONe3ElxefRl7qq13AnXxT9MmRy5DC0mDsltEU0y4DcB7Kt5khbaAilzswp0FOC+KMbs9vVU4COWg971hRfrrBo/GTuGh8GNOnDFP44Kc5A66v+D1fyxVGB+lo199UX0nQFASOLc5bLFF5tUe9Ia2jx0hHJpgU1dv372k69YHH5i9fBjjUlVyiUjL+NqePD12kPdmX9+CvF5ffijpeFVv4Bd8qlUYGqgajdwlukNlB7Z2t4ir7wFr1OQQkBOm4tbH+l9EqFmy4cwON3ytsvw9LC0gLuue60+Ln8U7dN4MYx9x9N5X+Ist8ohZwhi3SrS67SBrG+lTGsu/4QL+UHUKfWRA4k/owe8srgByWwl7S1bBUDMtp/YeEY7k/1fxcwbuGZ9NoP5OUk661yAr6Vssv0+LTSx1Cxf0iVQ5050O2feXgeTLkZH33kpdZ6unJoNmsmyauZ21NMBBS+VK5VA69esoS1e+fTDHf9PMQih/Ydlb35i7tqkKci2pM9gZYO7O9wNbKnpIe8Uay3ap2yiK+/Qj+omz7gJwPvvumBTyZO+AASbfaan6qw2xJ5YsZwflqajKwd9JaH9HoAE24+l2cflxcN2bSZBVf0mX3V7/fcMZHEBgd8P6Q5KCg/IWFU0+MDQ7gX/PmIoAMYf1LCGFKqq7mm+6pqmZxEPRb4WQZDxf1yIa7W5s+XJWZDOeq5THG+qqfajaGuImdYbXF6tR+XkohX1H9bAlN/oVqVj7v+M5fnngrsqojcCT3x0jTG/stsviQx/69aiGz+LS/jMZ2pLhMSi+k/EeG3bl0mko7Zfww8Az5iPqbudTZcVeB++48Z75ORt1FHZy7HdK5N8sCIWKO2O8fH7p3LyXP93HzrY+vVMzNPZ+x1bnp2SQlcifYTFlryGmYg5KcfAsdl45BhJOMwyHkdvkCWz7DBSP1JC71cw+dAuYLEKVsQDXKGczpsjms/qRFMenlCz6gTVn///iaRcbYeYdWyvdTVfW3X6v0Nu4c01cyHZKsAAAAASUVORK5CYII="
      ></image>
    </svg>
  );
}
