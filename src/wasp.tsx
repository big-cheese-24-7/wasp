import { GithubIcon } from "lucide-react"
import WaspLogo from "/wasp.svg"
import { Button } from "@/components/ui/button"

function Wasp() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <img src={WaspLogo} alt="Wasp logo" className="size-18 mb-4" />
      <h1 className="text-xl font-semibold">Wasp Web Editor</h1>
      <p className="text-xs text-muted-foreground mb-4">Free, Open source, Under Development</p>

      <Button variant={"outline"} size={"sm"}>
        <GithubIcon />
        <span>Repository</span>
      </Button>
    </main>
  )
}

export default Wasp
