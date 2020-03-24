import React, { Component } from "react";

class RowInput extends Component {
  render() {
    const { label, type, stylePlus, id } = this.props;
    return (
      <div className={`rowInput ${stylePlus} `}>
        <label>
          {label} <i className="chObl">*</i>
          <i className="infos"></i>
        </label>
        <div className="select">
          {type === "inputText" ? (
            <input type="text" id={id} name={id} />
          ) : (
            <select
              id={id}
              name={id}
              // onchange="stepFnsMain.change_pays_bien(this.value);"
            >
              <optgroup>
                <option value="63">FRANCE</option>
                <option value="19">BELGIQUE</option>
                <option value="103">LUXEMBOURG</option>
                <option value="167">SUISSE</option>
                <option value="86">ITALIE</option>
                <option value="57">ESPAGNE</option>
                <option value="5">ALLEMAGNE</option>
                <option value="148">ROYAUME-UNI</option>
              </optgroup>
              <optgroup label="----------------------------------------">
                <option value="1">AFGHANISTAN</option>
                <option value="2">AFRIQUE DU SUD</option>
                <option value="3">ALBANIE</option>
                <option value="4">ALGERIE</option>
                <option value="6">ANDORRE</option>
                <option value="7">ANGOLA</option>
                <option value="8">ANTIGUA ET BARBUDA</option>
                <option value="9">ARABIE SAOUDITE</option>
                <option value="10">ARGENTINE</option>
                <option value="11">ARMENIE</option>
                <option value="12">AUSTRALIE</option>
                <option value="13">AUTRICHE</option>
                <option value="14">AZERBAIDJAN</option>
                <option value="15">BAHAMAS</option>
                <option value="16">BAHREIN</option>
                <option value="17">BANGLADESH</option>
                <option value="18">BARBADE</option>
                <option value="20">BELIZE</option>
                <option value="21">BENIN</option>
                <option value="22">BHOUTAN</option>
                <option value="23">BIELORUSSIE</option>
                <option value="24">BOLIVIE</option>
                <option value="25">BOSNIE</option>
                <option value="26">BOTSWANA</option>
                <option value="27">BRESIL</option>
                <option value="28">BRUNEI</option>
                <option value="29">BULGARIE</option>
                <option value="30">BURKINA FASO</option>
                <option value="31">BURUNDI</option>
                <option value="32">CAMBODGE</option>
                <option value="33">CAMEROUN</option>
                <option value="34">CANADA</option>
                <option value="35">CAP-VERT</option>
                <option value="37">CHILI</option>
                <option value="38">CHINE</option>
                <option value="39">CHYPRE</option>
                <option value="40">COLOMBIE</option>
                <option value="41">COMORRES</option>
                <option value="42">CONGO</option>
                <option value="43">COREE (DU NORD)</option>
                <option value="44">COREE (DU SUD)</option>
                <option value="45">COSTA RICA</option>
                <option value="46">COTE-D'IVOIRE</option>
                <option value="47">CROATIE</option>
                <option value="48">CUBA</option>
                <option value="49">DANEMARK</option>
                <option value="50">DARUSSALAM</option>
                <option value="51">DJIBOUTI</option>
                <option value="52">DOMINIQUE</option>
                <option value="53">EGYPTE</option>
                <option value="54">EMIRATS ARABES UNIS</option>
                <option value="55">EQUATEUR</option>
                <option value="56">ERYTHREE</option>
                <option value="58">ESTONIE</option>
                <option value="59">ETATS UNIS</option>
                <option value="60">ETHIOPIE</option>
                <option value="61">FIDJI</option>
                <option value="62">FINLANDE</option>
                <option value="64">GABON</option>
                <option value="65">GAMBIE</option>
                <option value="66">GEORGIE</option>
                <option value="67">GHANA</option>
                <option value="68">GRECE</option>
                <option value="69">GRENADE</option>
                <option value="70">GUATEMALA</option>
                <option value="71">GUINEE</option>
                <option value="73">HAITI</option>
                <option value="74">HONDURAS</option>
                <option value="75">HONG-KONG</option>
                <option value="76">HONGRIE</option>
                <option value="77">ILES CAYMAN</option>
                <option value="78">ILES FEROE</option>
                <option value="79">INDE</option>
                <option value="80">INDONESIE</option>
                <option value="81">IRAN</option>
                <option value="82">IRAQ</option>
                <option value="83">IRLANDE</option>
                <option value="84">ISLANDE</option>
                <option value="85">ISRAEL</option>
                <option value="87">JAMAIQUE</option>
                <option value="88">JAPON</option>
                <option value="89">JORDANIE</option>
                <option value="90">KAZAKHSTAN</option>
                <option value="91">KENYA</option>
                <option value="92">KIRIBATI</option>
                <option value="93">KOWEIT</option>
                <option value="94">KYRGYZSTAN</option>
                <option value="95">LAOS (REPUBLIQUE POPULAIRE)</option>
                <option value="96">LESOTHO</option>
                <option value="97">LETTONIE</option>
                <option value="98">LIBAN</option>
                <option value="99">LIBERIA</option>
                <option value="100">LIBYA</option>
                <option value="101">LIECHTENSTEIN</option>
                <option value="102">LITUANIE</option>
                <option value="104">MACEDOINE</option>
                <option value="105">MADAGASCAR</option>
                <option value="106">MALAISIE</option>
                <option value="107">MALAWI</option>
                <option value="108">MALDIVES</option>
                <option value="109">MALI</option>
                <option value="110">MALTE</option>
                <option value="111">MAROC</option>
                <option value="112">MAURICE</option>
                <option value="113">MAURITANIE</option>
                <option value="114">MEXIQUE</option>
                <option value="115">MICRONESIE</option>
                <option value="116">MOLDAVIE</option>
                <option value="117">MONACO</option>
                <option value="118">MONGOLIE</option>
                <option value="119">MONTENEGRO</option>
                <option value="120">MOZAMBIQUE</option>
                <option value="121">MYANMAR</option>
                <option value="122">NAMIBIE</option>
                <option value="123">NAURU</option>
                <option value="124">NEPAL</option>
                <option value="125">NICARAGUA</option>
                <option value="126">NIGER</option>
                <option value="127">NIGERIA</option>
                <option value="128">NORVEGE</option>
                <option value="129">NOUVELLE-ZELANDE</option>
                <option value="130">OMAN</option>
                <option value="131">OUGANDA</option>
                <option value="132">OUZBEKISTAN</option>
                <option value="133">PAKISTAN</option>
                <option value="134">PANAMA</option>
                <option value="135">PAPOUASIE NOUVELLE-GUINEE</option>
                <option value="136">PARAGUAY</option>
                <option value="137">PAYS-BAS</option>
                <option value="138">PEROU</option>
                <option value="139">PHILIPPINES</option>
                <option value="140">POLOGNE</option>
                <option value="141">POLYNESIE FRANCAISE</option>
                <option value="142">PORTUGAL</option>
                <option value="143">QATAR</option>
                <option value="144">REPUBLIQUE CENTRE AFRICAINE</option>
                <option value="145">REPUBLIQUE DOMINICAINE</option>
                <option value="146">REPUBLIQUE TCHEQUE</option>
                <option value="147">ROUMANIE</option>
                <option value="149">RUANDA</option>
                <option value="150">RUSSIE</option>
                <option value="72">REPUBLIQUE COOPERATIVE DU GUYANA</option>
                <option value="190">REPUBLIQUE DEMOCRATIQUE DU CONGO</option>
                <option value="151">SAINT VINCENT ET GRENADE</option>
                <option value="152">SALVADOR</option>
                <option value="153">SAMOA OCCIDENTAL</option>
                <option value="154">SAN MARIN</option>
                <option value="155">SAO TOME ET PRINCIPE</option>
                <option value="156">SENEGAL</option>
                <option value="157">SERBIE</option>
                <option value="158">SIERRA LEONE</option>
                <option value="159">SINGAPOUR</option>
                <option value="160">SLOVAQUIE</option>
                <option value="161">SLOVENIE</option>
                <option value="162">SOLOMON</option>
                <option value="163">SOMALIE</option>
                <option value="164">SOUDAN</option>
                <option value="165">SRI LANKA</option>
                <option value="166">SUEDE</option>
                <option value="168">SURINAM</option>
                <option value="169">SWAZILAND</option>
                <option value="170">SYRIE</option>
                <option value="171">TADJIKISTAN</option>
                <option value="172">TAIWAN</option>
                <option value="173">TANZANIE</option>
                <option value="174">TCHAD</option>
                <option value="175">THAILANDE</option>
                <option value="176">TOGO</option>
                <option value="177">TONGA</option>
                <option value="178">TRINIDAD ET TOBAGO</option>
                <option value="179">TUNISIE</option>
                <option value="180">TURKMENISTAN</option>
                <option value="181">TURQUIE</option>
                <option value="182">UKRAINE</option>
                <option value="183">URUGUAY</option>
                <option value="184">VANUATU</option>
                <option value="185">VATICAN</option>
                <option value="186">VENEZUELA</option>
                <option value="187">VIETNAM</option>
                <option value="188">YEMEN</option>
                <option value="191">ZAMBIE</option>
                <option value="192">ZIMBABWE</option>
              </optgroup>
            </select>
          )}
        </div>
      </div>
    );
  }
}

export default RowInput;
