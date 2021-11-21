import { FunctionComponent } from "react";
import CardRow, { CardRowProps } from "../card-row/CardsRow";

export interface ViewProps {
  rows?: CardRowProps[];
}

const View: FunctionComponent<ViewProps> = (props: ViewProps) => {
  return (
    <div className="flex flex-col h-full lg:h-screen">
      {props.rows?.map((row) => (
        <CardRow {...row} />
      ))}
    </div>
  );
};

export default View;
