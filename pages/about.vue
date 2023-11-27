import { Style } from '../.nuxt/components';
<script lang="ts" setup>
const containerRef = ref();
const imageRef = ref();

const circleRef1 = ref();
const circleRef2 = ref();
const circleRef3 = ref();

const handleOnScroll = () => {
  const val = containerRef.value;
  if (val instanceof HTMLElement) {
    const scrollPosition = val.scrollTop;

    let valSc = (scrollPosition / val.scrollHeight) * 100;

    if (valSc <= 20) {
      imageRef.value.style.bottom = `${valSc - 7}%`;
    }

    circleRef1.value.style.left = `${valSc}%`;
    circleRef2.value.style.left = `${valSc - 100}%`;
    circleRef3.value.style.left = `${valSc - 20}%`;

    imageRef.value.style.left = `${valSc - 50}%`;
  }
};
</script>

<template>
  <div class="w-screen"></div>
  <div class="h-[calc(100vh-8rem)] relative">
    <div
      ref="circleRef1"
      class="absolute w-64 h-48 z-30 opacity-30 bg-gradient-to-b from-zinc-100 to-yellow-400 rounded-full blur-sm top-[5%]"
    ></div>

    <div
      ref="circleRef2"
      class="absolute w-64 h-48 z-30 opacity-30 bg-gradient-to-b from-zinc-100 to-yellow-400 rounded-full blur-sm top-[30%] left-[-100%]"
    ></div>

    <div
      ref="circleRef3"
      class="absolute w-64 h-48 z-30 opacity-30 bg-gradient-to-b from-zinc-100 to-yellow-400 rounded-full blur-sm top-[60%] left-[-20%]"
    ></div>
    <img
      src="/player.png"
      class="absolute image overflow-hidden z-30 opacity-30"
      ref="imageRef"
    />
    <div
      class="h-full bg-transparent overflow-auto z-50 mx-12"
      ref="containerRef"
      @scroll="handleOnScroll"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde id
      veritatis fuga, perspiciatis molestiae corrupti similique ut vel eos
      doloribus officia nihil laboriosam, dolore tempore pariatur quidem error
      excepturi ex. Vitae sed praesentium in aspernatur sapiente facilis sunt
      officia dolorum repudiandae obcaecati eligendi dicta maiores natus,
      laboriosam perferendis tempora. Culpa, quas. Inventore vel exercitationem
      ipsa, ex molestiae eum suscipit illo, iste, aliquam quibusdam consequuntur
      tempora repudiandae. Optio, inventore rerum pariatur similique amet nisi
      placeat quam nemo! Reiciendis earum blanditiis commodi laudantium eveniet
      odit reprehenderit voluptatem molestiae quibusdam cum! Pariatur officiis
      similique aperiam error dolore quibusdam commodi sunt eaque, ea quos
      repellat rem voluptates ullam dolor esse iste laudantium, sed optio.
      Necessitatibus quod molestias saepe pariatur sit, itaque minus vero labore
      quibusdam eveniet cum! Consequuntur harum voluptas quidem officiis
      accusamus? Veritatis, iste minima. Repellendus delectus quia laudantium
      qui, omnis placeat vero esse corrupti harum quaerat voluptatem quisquam
      velit? Facilis iste quas culpa itaque non laudantium reprehenderit sint
      eius ipsum at vitae expedita asperiores eaque excepturi facere dolore
      distinctio, et consequuntur quia numquam nobis fuga sapiente accusamus ea?
      Commodi, ipsum numquam voluptatem deleniti animi nihil assumenda mollitia
      odit, non enim eligendi minus rerum natus dolorum perferendis nesciunt
      molestiae accusantium, ea corrupti tempore? Quas consequuntur minima ullam
      sint reprehenderit fuga, voluptas molestiae? Id laudantium atque, dolor
      explicabo ullam ad et, quas tempore similique eaque dicta voluptate modi
      consequatur repellendus! Consequatur officiis provident ipsum nihil, quia
      accusamus illo est debitis eaque. Praesentium veniam laudantium magni,
      omnis rem voluptatibus modi tempora minus accusamus reiciendis, laborum,
      quae impedit quam blanditiis veritatis numquam obcaecati atque ut labore
      quia. Culpa ullam veritatis, temporibus ut possimus voluptatem libero
      animi, qui nisi repudiandae rerum laborum nam nobis accusamus. Architecto
      dignissimos, unde quis nesciunt ipsam culpa sed porro doloremque cumque
      ratione tenetur distinctio dicta eveniet. Voluptatem aliquam eum,
      similique voluptatibus laboriosam, expedita possimus maxime tenetur
      commodi accusamus repellat est ipsa quia sunt blanditiis rem dolores.
      Repudiandae magnam inventore, praesentium blanditiis fugiat rem repellat
      similique non, adipisci velit laborum fuga qui. Deserunt natus architecto
      reiciendis vel repellendus fugit accusamus, necessitatibus nulla quis a
      earum quidem! Delectus maiores ut architecto, consequatur aliquam
      praesentium ex molestias veniam ipsam ducimus numquam alias, fuga facere?
      Recusandae, sed numquam in beatae nam asperiores aliquid. Harum officia in
      facilis voluptatibus quibusdam perferendis praesentium, cumque eum velit
      deserunt assumenda eveniet vel, quasi exercitationem veritatis, odit sit
      mollitia voluptates! Dolore, sed modi! Odit aliquid corrupti, similique
      tempora deleniti ut necessitatibus inventore libero exercitationem
      expedita quisquam ducimus est facilis fugiat, optio, molestias neque.
      Iusto laborum odit officiis? Earum, repudiandae! Natus debitis nemo illo
      obcaecati. Ipsam, explicabo asperiores id vitae sed excepturi delectus
      doloremque perspiciatis eligendi quasi corporis! Id magni sit modi soluta
      ex ad odio quos repellat perspiciatis molestias minima cupiditate, quam ea
      voluptatum eius nemo ut omnis iure vero dolorem. Adipisci asperiores amet
      nihil corporis doloribus numquam neque nemo. Veniam magnam eveniet ea quos
      ad et laborum! In eius temporibus assumenda ipsam cupiditate porro dolorum
      tempore odit voluptas? Facilis adipisci, odio magnam placeat dolorum
      similique et dolore sapiente eos quae est eveniet neque excepturi culpa,
      tenetur in voluptates, fugit minus harum blanditiis molestias. Ad, nam
      facere blanditiis modi cum excepturi repellat officiis dolore doloribus
      ipsum optio at distinctio quod nisi id eaque, voluptas consequatur rerum
      iste deserunt esse et soluta explicabo earum. Maxime, nulla. Animi fuga
      optio quibusdam soluta, molestias vel quia quas nulla magnam aperiam
      recusandae. Tenetur repellendus assumenda magni, laboriosam consequuntur
      autem labore hic repudiandae quaerat. Voluptatibus, dolorum accusantium
      atque voluptates doloremque voluptatem repudiandae, nam, quam mollitia
      pariatur consectetur corrupti rerum maxime nobis nesciunt ullam quos non?
      Fuga molestiae blanditiis laborum magni? Eligendi natus ab repudiandae
      recusandae ipsam aspernatur ea ex voluptatum sed facere optio, alias
      voluptates, id quas hic nam doloremque laborum ullam voluptatibus iure
      maiores sint. Sequi amet neque excepturi tempore quidem delectus facere
      dolorem quod. Nostrum consequatur pariatur aperiam provident,
      exercitationem dicta quasi! In delectus optio ducimus minus culpa quo,
      tenetur iste. Veritatis illum excepturi cupiditate! Mollitia praesentium
      fuga nobis, eligendi enim quaerat nemo facilis reprehenderit ut ab ad
      alias assumenda commodi corporis sequi minus, pariatur vero
      exercitationem, eos corrupti qui molestiae. Illum cumque sunt doloribus
      reiciendis nihil mollitia enim. Dolorem sed reiciendis optio delectus
      fugiat voluptatem dolorum non! Deleniti nisi amet perspiciatis, nemo
      obcaecati similique officia eveniet distinctio, error eos molestias sequi
      ducimus sunt aliquam ab odio placeat necessitatibus impedit dolorum omnis!
      Natus reprehenderit excepturi mollitia. Eius reiciendis exercitationem
      neque maxime! Fugiat, commodi sed! Fugiat, sint unde totam nisi molestiae
      minima libero, eligendi pariatur nobis, placeat quos quis modi adipisci ut
      dicta vel quod odio. Quibusdam reprehenderit fugiat eum eius alias
      excepturi iusto fuga vitae aspernatur consequatur accusamus maxime dolor
      ea distinctio quidem, odio dicta! Veniam harum sint perspiciatis culpa
      totam saepe illum ea sit sunt quas molestiae labore, quisquam modi.
      Tempore, culpa! Id est libero suscipit modi, illum quae omnis, sunt saepe
      molestias adipisci ad at fugiat dolor nihil dicta blanditiis natus
      consequatur, aliquam nulla! Delectus nobis, quo ullam incidunt veniam
      aperiam aliquid quas a voluptas magni quod mollitia vero ex ad id fugit
      unde adipisci earum ea praesentium harum, fuga nemo placeat minus. Optio
      dignissimos odio cupiditate unde suscipit quis, non quod fugiat maiores
      consequuntur, iste culpa exercitationem est sed necessitatibus atque.
      Reprehenderit nostrum at minima voluptatibus, sapiente eos est quia error
      impedit esse inventore nesciunt voluptas iste totam eaque explicabo,
      dolorem sunt. Rem, beatae libero dolor nihil iste ipsam pariatur
      repudiandae nam esse sit eligendi corrupti ipsa reiciendis, odit
      architecto aperiam, iusto perferendis eaque accusamus? Nulla et animi nam
      delectus? Ea nam sunt libero doloribus illo aliquam vel non error porro
      minus sequi soluta, odit laborum voluptas. Consequuntur pariatur possimus
      ab iusto repellat quasi corporis fuga dolorem sit, laborum dolor vitae
      eos! Officiis fugiat quisquam atque molestias quod beatae incidunt.
      Quisquam odit esse facilis officiis consequatur, enim magni quaerat
      laborum deserunt aperiam eius voluptas consequuntur ipsa sequi obcaecati
      voluptatem est placeat delectus cum quas expedita repellat aliquam?
      Veritatis aut adipisci quisquam magni porro ab velit. Iure dolorum
      eligendi accusamus, vel maiores nobis odio cupiditate fugiat? Hic mollitia
      reprehenderit aliquam rem quisquam dolore nihil molestias aperiam labore
      maiores quidem, consequuntur dignissimos corporis nesciunt sit quo
      exercitationem eaque debitis omnis, ex laborum natus dolorem recusandae
      tenetur. Atque architecto error, enim tempore molestias exercitationem.
      Dolorum quod magni dignissimos vero repellat neque consequatur vitae
      exercitationem illo voluptas officiis animi nam enim, facilis minus.
      Cupiditate rerum nesciunt tempore vero sapiente ipsum eligendi tenetur,
      fugiat id iste magni perspiciatis architecto similique corporis, aut est
      nam in aliquid repellat voluptas! Earum quidem assumenda esse, molestiae
      est quod omnis quas, debitis, delectus dignissimos ipsam. Cum deserunt a
      eaque quidem. Optio aliquam neque repudiandae voluptate nam omnis alias,
      repellendus numquam error vitae illum recusandae ad dicta porro eius totam
      reiciendis hic atque culpa, dolorem modi rem accusantium nisi nesciunt!
      Dolore dolor ab illo vel sequi commodi amet tenetur. Non labore hic nobis,
      autem suscipit error voluptatibus? Nesciunt doloremque, illum quae atque
      dolorem odio error minima tempore nostrum? Beatae repellendus dolore dolor
      veritatis quod facere, ullam id harum et quaerat vero! Obcaecati saepe
      officiis ducimus quam exercitationem voluptas. Ab odio quod animi
      doloribus tempore soluta necessitatibus temporibus quis iusto consectetur
      corporis, veritatis sint natus, at, explicabo molestiae tenetur fuga
      laboriosam cumque nisi. Dicta odit enim deserunt odio iure officiis
      maiores, asperiores magnam officia laboriosam! Corrupti accusantium
      tempora ipsam dolorum exercitationem dignissimos architecto obcaecati
      quibusdam repudiandae pariatur hic id, officia animi nostrum eligendi
      provident eaque officiis cupiditate quasi voluptates dicta nobis in.
      Laudantium mollitia voluptatem omnis suscipit voluptas ipsam at optio
      repellat tempore id eius facilis, eligendi esse? Velit hic consequuntur
      minima magni provident ad dolore id! Omnis vero optio mollitia incidunt
      qui necessitatibus consequuntur porro reiciendis, praesentium corrupti
      enim, excepturi quaerat deleniti labore aut nihil iusto eveniet
      perferendis asperiores, error magnam ipsam! Adipisci ab voluptates enim
      impedit eum tempore perferendis sint amet non accusantium beatae
      aspernatur repudiandae, exercitationem placeat deleniti doloribus! Sit
      voluptas ratione soluta autem blanditiis in enim dolorem commodi adipisci
      amet non earum veritatis iure tempora cumque ab alias facere aut, eligendi
      praesentium porro? Aut atque dolorem neque eaque consequatur dignissimos
      ducimus veritatis tempora modi molestias. Sit nesciunt quos mollitia
      excepturi sunt, temporibus optio consequuntur, officia quo odit
      perferendis quod cupiditate qui iusto ad quam delectus placeat nobis
      minima fuga nisi ipsam. Tenetur ipsa qui officia ipsum mollitia? Minima
      libero tenetur officia quas non facere dolor quibusdam tempore officiis
      ducimus ut nemo tempora consectetur, sit quia porro autem ab pariatur
      voluptas odit reiciendis? Eligendi aspernatur obcaecati totam excepturi
      ipsum! Sapiente molestiae ipsam rem vel soluta, iure voluptate. Maxime
      beatae pariatur reprehenderit earum repellendus atque dolorem dolorum!
      Omnis aperiam quo rem cum aliquid praesentium dicta debitis ut corrupti,
      odio eum similique neque totam aspernatur. Inventore ullam deserunt
      consequatur et recusandae sint facilis assumenda est aut! Itaque at neque
      sunt repudiandae natus. Nulla iste voluptatem repellat reiciendis earum
      veniam ipsa corporis consequatur vero ipsam quia assumenda obcaecati,
      beatae vitae officiis voluptate explicabo accusamus! Eligendi aspernatur
      quos harum velit dolor nam voluptatum tempora modi, sapiente repudiandae
      quas non qui asperiores temporibus voluptate veritatis optio officia? Illo
      delectus magni quae deleniti nobis laudantium eius, tempore assumenda iure
      perspiciatis consequatur nam sed, inventore voluptas tempora ullam rerum
      vero autem debitis quisquam deserunt architecto vel minus? Repellat a sed
      quae officia optio nihil eaque? Asperiores quidem excepturi unde
      temporibus nulla! Aperiam facilis repellat molestias at architecto
      molestiae alias accusamus eum animi minus temporibus nemo, veritatis
      magnam? Odio totam eveniet laboriosam modi! At nihil atque laborum dolorem
      placeat ullam quas? Sunt possimus cumque deserunt blanditiis quia autem
      sit repellendus ad! Sit, reiciendis hic laborum doloribus et veniam modi
      earum optio consequatur est officia harum cupiditate exercitationem,
      commodi recusandae saepe fugiat quia, non nobis neque dolore vero
      necessitatibus. Repellat, deleniti nesciunt. Similique animi et
      consectetur iusto adipisci eligendi molestiae magni amet, asperiores,
      nesciunt quos recusandae aut incidunt unde, provident veniam doloremque?
      Dolores, et saepe non impedit culpa deleniti maxime quod nostrum, numquam,
      repellendus illo repellat. Voluptatem enim dolore quas aspernatur animi
      provident culpa dolorum voluptatum! Ea eos totam ad nisi incidunt quia,
      praesentium doloribus repellat quod quaerat? Accusantium molestias
      voluptas quam explicabo ad quod similique dolorem deleniti earum. Eveniet
      minima atque beatae minus iusto maxime repudiandae sapiente aliquam facere
      omnis ducimus facilis vitae quibusdam vero a veritatis cumque similique,
      laboriosam sed, libero nemo. Quo doloribus aut accusamus soluta nemo culpa
      maxime inventore quae est sit omnis aperiam excepturi nisi quos architecto
      mollitia, aliquam corrupti a perspiciatis laudantium et velit cumque
      dolorum commodi? Eum iure inventore nisi ad explicabo deserunt esse
      aperiam, quae, obcaecati dolore veritatis libero rem dolorum assumenda
      excepturi ratione voluptates a, voluptatem accusantium temporibus
      molestiae? Veritatis aspernatur id perferendis eius sint natus,
      reprehenderit libero accusamus ipsam? Eum suscipit accusamus, debitis
      natus odio quia, reiciendis culpa et, quos sed esse recusandae quidem.
      Provident dolorem eligendi harum iste optio mollitia. Aut, ipsam
      necessitatibus vero quasi alias velit repellat nostrum sint saepe vitae
      voluptates? Accusantium beatae voluptas maxime quas suscipit voluptatem,
      perferendis, vero cupiditate nisi est eos? Laborum eveniet blanditiis ab
      ad, voluptatem nulla soluta sapiente inventore possimus ullam accusamus,
      laboriosam aliquid! Fugit eos ipsum iusto sint consequatur voluptate,
      omnis recusandae, quis hic aliquam molestiae, provident accusantium.
      Recusandae molestiae reiciendis labore, eaque deleniti nihil
      exercitationem doloremque quos soluta et fugiat quasi itaque adipisci
      omnis nam obcaecati. Commodi voluptatum, veniam amet error nobis, earum,
      doloribus deserunt consequatur incidunt ex ipsam culpa soluta similique
      dolorum rerum repudiandae tempore vel ratione a maiores minus. Consequatur
      illo, perferendis nulla illum provident doloribus placeat cumque quae quas
      modi nostrum expedita, eum, dolore sint beatae aperiam architecto. Id
      atque, dignissimos eaque beatae obcaecati maiores ab ut, doloribus sed
      recusandae unde. Quis facere commodi enim exercitationem repellendus.
      Quibusdam magni fugiat dolor ratione adipisci culpa ea quia beatae esse?
      Tempore ea, magnam nulla repellat, quisquam praesentium libero et eum
      rerum sequi, id rem. Non adipisci consequuntur odio, aliquam, libero magni
      eligendi laborum, sequi ipsa numquam rem. Molestiae veritatis itaque
      praesentium earum sequi. Architecto nostrum exercitationem provident
      mollitia error cum praesentium asperiores eaque reprehenderit, molestiae
      facere velit nemo nobis ea nesciunt quos perspiciatis tenetur illo
      blanditiis consequuntur! Voluptate maiores esse non, fuga aut velit
      necessitatibus omnis labore!
    </div>
  </div>
</template>

<style scoped>
.image {
  bottom: -7%;
  left: -50%;
  transition: left 0.5ms ease-in-out;
  overflow: hidden;
}
</style>
