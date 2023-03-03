import { Formik } from "formik";
import { useCallback } from "react";

export default function Form() {
  const onSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <form
      method="post"
      action="https://waalwijkse-zwem-vereniging.email-provider.eu/subscribe/post/index.php"
      accept-charset="utf-8"
      className="form-mhhzpwqxix"
    >
      <input type="hidden" name="next" value="" />
      <input type="hidden" name="a" value="zqsebq824w" />
      <input type="hidden" name="l" value="mhhzpwqxix" />

      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label for="id-t10xRHLUGt">E-mailadres&nbsp;*</label>
          <input
            className="bg-slate-700 px-4 py-3 border border-slate-500"
            name="t10xRHLUGt"
            id="id-t10xRHLUGt"
            type="email"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label for="id-aLSkxolEsP">Naam&nbsp;*</label>
          <input
            name="aLSkxolEsP"
            id="id-aLSkxolEsP"
            type="text"
            required
            className="bg-slate-700 px-4 py-3 border border-slate-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label for="id-h4p1oRLKsa">Rol&nbsp;*</label>
          <select
            className="bg-slate-700 px-4 py-3 border border-slate-500"
            name="h4p1oRLKsa"
            id="id-h4p1oRLKsa"
            required
          >
            <option value="1">Deelnemer</option>
            <option value="2">Begeleider</option>
          </select>
        </div>

        <input
          className="block w-full bg-blue-600 p-4"
          type="submit"
          value="Aanmelden"
        />
      </div>
    </form>
  );
}

{
  /* <label for="id-h4p1oRLKsa">Rol&nbsp;*</label><select name="h4p1oRLKsa" id="id-h4p1oRLKsa" required><option value="">Maak een keuze:</option><option value="1">Deelnemer</option><option value="2">Begeleider</option></select>
<label for="id-Cw1k85Pwd0">Telefoon</label><input name="Cw1k85Pwd0" id="id-Cw1k85Pwd0" type="text">
<label for="id-U0hcv4QQ5q">Opmerkingen</label><input name="U0hcv4QQ5q" id="id-U0hcv4QQ5q" type="text">
<input autocomplete="new-password" type="email" id="email" name="email" placeholder="Your e-mail here" style="position:absolute;top:-9999px;left:-9999px;">
<input type="submit" value="Aanmelden" /> */
}
