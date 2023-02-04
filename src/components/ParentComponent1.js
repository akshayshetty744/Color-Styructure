// import data from "../colors.json";
export default function Component1(props) {
    let arr = Object.keys(props.name);
    return (
        <div className="parentDiv">
          {arr.map((e) => {
              return (
                <div className="main">
                 <div className="colorName"> <div>{e.charAt(0).toUpperCase() + e.slice(1)}</div></div>
                  <div className="colorType">
                    {props.name[e].map((element,i) => {
                      const color = {
                        backgroundColor: element,
                      };
                      return (
                        <div className="onecolor">
                               <div className="color" style={color}>
                               </div>
                                <div className="content">
                                        <div className="count">{i == 0 ? "50": i*100}</div>
                                        <div className="colorCode">{element.toUpperCase()}</div>
                                </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
          })
          }
    </div>
  );
}
