import Button from "@/components/button/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage(): JSX.Element {
  //constants

  //states

  //hooks

  //functions

  //effects

  //render

  return (
    <div>
      <p>ProfilePage</p>
      <div>
        <h1 className="text-2xl"> Size: sm </h1>
        <h2> Variant: contained </h2>
        <div className="flex gap-3">
          <Button variant="contained" rounded="lg"color="default" size="sm">
            Default
          </Button>
          <Button variant="contained" rounded="lg"color="primary" size="sm">
            Primary
          </Button>
          <Button  loading variant="contained" rounded="lg"color="info" size="sm">
            Info
          </Button>
          <Button variant="contained" rounded="lg"color="warning" size="sm">
            Warning
          </Button>
          <Button variant="contained" rounded="lg"color="success" size="sm">
            Success
          </Button>
          <Button variant="contained" rounded="lg"color="danger" size="sm">
            Danger
          </Button>
          <Button variant="contained" rounded="lg"color="dark" size="sm">
            Dark
          </Button>
          <Button variant="contained" rounded="lg"color="default" size="sm" disabled={true}>
            Disabled
          </Button>
        </div>
        <h2> Variant: Outlined </h2>
        <div className="flex gap-3">
          <Button variant="outlined" rounded="lg"color="default" size="sm">
            Default
          </Button>
          <Button variant="outlined" rounded="lg"color="primary" size="sm">
            Primary
          </Button>
          <Button variant="outlined" rounded="lg"color="info" size="sm">
            Info
          </Button>
          <Button variant="outlined" rounded="lg"color="warning" size="sm">
            Warning
          </Button>
          <Button variant="outlined" rounded="lg"color="success" size="sm">
            Success
          </Button>
          <Button variant="outlined" rounded="lg"color="danger" size="sm">
            Danger
          </Button>
          <Button variant="outlined" rounded="lg"color="dark" size="sm">
            Dark
          </Button>
          <Button variant="outlined" rounded="lg"color="default" size="sm" disabled={true}>
            Disabled
          </Button>
        </div>
        <hr />

        <h1 className="text-2xl"> Size : md </h1>
        <h2>Variant: contained</h2>
        <div className="flex gap-3">
          <Button variant="contained" rounded="lg"color="default" size="md" loading>
            Default
          </Button>
          <Button variant="contained" rounded="lg"color="primary" size="md">
            Primary
          </Button>
          <Button loading variant="contained" rounded="lg"color="info" size="md">
            Info
          </Button>
          <Button variant="contained" rounded="lg"color="warning" size="md">
            Warning
          </Button>
          <Button variant="contained" rounded="lg"color="success" size="md">
            Success
          </Button>
          <Button variant="contained" rounded="lg"color="danger" size="md">
            Danger
          </Button>
          <Button variant="contained" rounded="lg"color="dark" size="md">
            Dark
          </Button>
          <Button variant="contained" rounded="lg"color="default" size="md" disabled={true}>
            Disabled
          </Button>
        </div>
        <h2>Variant: Outlined</h2>
        <div className="flex gap-3">
          <Button variant="outlined" rounded="lg"color="default" size="md">
            Default
          </Button>
          <Button variant="outlined" rounded="lg"color="primary" size="md">
            Primary
          </Button>
          <Button variant="outlined" rounded="lg"color="info" size="md">
            Info
          </Button>
          <Button variant="outlined" rounded="lg"color="warning" size="md">
            Warning
          </Button>
          <Button variant="outlined" rounded="lg"color="success" size="md">
            Success
          </Button>
          <Button variant="outlined" rounded="lg"color="danger" size="md">
            Danger
          </Button>
          <Button variant="outlined" rounded="lg"color="dark" size="md">
            Dark
          </Button>
          <Button variant="outlined" rounded="lg"color="default" size="md" disabled={true}>
            Disabled
          </Button>
        </div>
        <hr />

        <h1 className="text-2xl"> Size : lg </h1>
        <h2> Variant: Contained </h2>
        <div className="flex gap-3">
          <Button variant="contained" rounded="lg"color="default" size="lg">
            Default
          </Button>
          <Button variant="contained" rounded="lg"color="primary" size="lg">
            Primary
          </Button>
          <Button variant="contained" rounded="lg"color="info" size="lg">
            Info
          </Button>
          <Button variant="contained" rounded="lg"color="warning" size="lg">
            Warning
          </Button>
          <Button variant="contained" rounded="lg"color="success" size="lg">
            Success
          </Button>
          <Button variant="contained" rounded="lg"color="danger" size="lg">
            Danger
          </Button>
          <Button variant="contained" rounded="lg"color="dark" size="lg">
            Dark
          </Button>
          <Button variant="contained" rounded="lg"color="default" size="lg" disabled={true}>
            Disabled
          </Button>
        </div>
        <h2> Variant: Outlined </h2>
        <div className="flex gap-3">
          <Button variant="outlined" rounded="lg"color="default" size="lg">
            Default
          </Button>
          <Button variant="outlined" rounded="lg"color="primary" size="lg">
            Primary
          </Button>
          <Button variant="outlined" rounded="lg"color="info" size="lg">
            Info
          </Button>
          <Button variant="outlined" rounded="lg"color="warning" size="lg">
            Warning
          </Button>
          <Button variant="outlined" rounded="lg"color="success" size="lg">
            Success
          </Button>
          <Button variant="outlined" rounded="lg"color="danger" size="lg">
            Danger
          </Button>
          <Button variant="outlined" rounded="lg"color="dark" size="lg">
            Dark
          </Button>
          <Button variant="outlined" rounded="lg"color="default" size="lg" disabled={true}>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  );
}
