// ==UserScript==
// @name         New Userscript 1
// @namespace    http://tampermonkey.net/
// @version      2026-06-11
// @description  Elaborate on bullet points by user
// @author       You
// @match        *://*.reddit.com/r/explainlikeimfive/comments/3ye7j7/eli5why_is_wikipedia_considered_unreliable_yet/
// @icon         http://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    let comment = document.querySelectorAll("div.scalable-text")[1];
    let bq = document.querySelectorAll("blockquote")[0];
    let desc_x = `Your right to edit Wikipedia ends at the nose of some wack gatekeeper who is more willing to waste everyone&rsquo;s time and effort in edit wars than you. If you don&rsquo;t have unlimited time and persistence, you won&rsquo;t (and can&rsquo;t) win, no matter how correct you are.`;

    comment.innerHTML = `
    <p>I agree with this poster, I just wanted to expand that the combination of editor bias and bad summaries of sources together (rather than in isolation) are the biggest reasons the site is unreliable. A lot of Wikipedians have their own pet sources they like; often times they haven&rsquo;t gone to the library lately, and many sources (both in print and online) have not been updated or synthesised with the current beliefs on things, so many articles end up being more representative of whatever sources were available to the editors who last touched them, and not necessarily of everything available.</p>

    <p>There are two massive obstacles that are almost guaranteed to eventually drive away anyone who&rsquo;s dumb enough to attempt editing Wikipedia in a serious and constructive manner:</p>

    <ol style="list-style-type: upper-alpha;">
        <li>
            <p><strong>Bad sourcing and content policies.</strong></p>
            <p>Wikipedia explicitly gives an extremely strong preference for secondary sources and recently published accounts over primary sources. Both of these effectively equate to a requirement that the documentation be as <i>distant as possible</i> from the actual evidence. That is the exact opposite of what an expert will do, so experts are effectively prohibited from using good practice. While Wikipedia never explicitly forbids direct citations of primary sources, their &ldquo;no original research&rdquo; policy does firmly declare <a href="https://en.wikipedia.org/wiki/Wikipedia:No_original_research#Primary,_secondary_and_tertiary_sources"><i>&ldquo;<b>do not</b> analyze, synthesize, interpret, or evaluate material found in a primary source yourself; instead, refer to [&lsquo;reliable&rsquo; (whatever that word means anymore)] secondary sources that do so.&rdquo;</i></a> That is the opposite of what experts actually do.</p>

            <p>At the same time, Wikipedia&rsquo;s <a href="https://en.wikipedia.org/wiki/Wikipedia:Verifiability">&ldquo;Verifiability&rdquo;</a> policy makes the accuracy of secondary sources a single point of failure: the threshold for inclusion is whether something can be &ldquo;verified&rdquo; by &ldquo;reliable&rdquo; sources, not whether it is true. So if most secondary sources repeat a flawed account of something, Wikipedia will perpetuate it, even if the primary sources are correct. Whenever there is an incorrect majority, any content stating what is actually true will be a minority viewpoint, and will fail verification because prioritising it is considered &ldquo;giving it undue weight,&rdquo; and any interpretation of the correct viewpoint will be prone to being dismissed as &ldquo;original research,&rdquo; no matter how obvious the inaccuracies are.</p>

            <p>The combination of what has become of these two policies is a system that is not only dangerously vulnerable to errors, but will often amplify and perpetuate them when they do occur. When covering history, religion, politics, and social issues, this is unsurprising&mdash;these fields are inherently controversial, so bias is difficult to control. What&rsquo;s worse is that it also fails in STEM, the places where Wikipedia is genuinely good overall. In STEM, questions have correct answers, facts are verifiable, and standards exist, but since most journalists have deadlines and lukewarm (at best) background in the field they are covering, and since the information involved is often very dense and hard to understand, secondary sources like news articles and popular science outlets are routinely full of inaccuracies, some of them deliberate (especially when it comes to environmental issues). And in non-STEM topics that are more niche or obscure but non-controversial, the same thing happens, where the accuracy of articles covering them will be inconsistent at best, as well. Despite this, an article from a major outlet that is factually wrong would still carry significantly more procedural weight on Wikipedia than the source(s) it (mis)represents, because the secondary source&rsquo;s article is a &ldquo;reliable secondary source&rdquo; and any interpretation of the original source itself runs the risk of being dismissed as &ldquo;original research.&rdquo; The policy that was designed to keep agendas out of Wikipedia has become weaponised over the years into one of the most reliable ways to push them in.</p>

            <p>The failure modes this produces are far too many to list, but fall into four distinct categories:</p>

            <ul>
                <li>
                    <p><strong>Textbook lag:</strong></p>
                    <p>Even in STEM, widely-used news articles and websites often contain statements and conventions that are oversimplified, obsolete, or outright wrong, that have been propagated for a long time.* Textbooks are not immune to this either, as they can lag behind the most up-to-date research by decades. Despite this, Wikipedia&rsquo;s sourcing policies work against editors trying to reflect current consensus among experts by citing papers and other primary sources directly, so they often lose to those citing popular websites and media outlets.</p>
                </li>
                <li>
                    <p><strong>Circular reporting:</strong></p>
                    <p>Also known as &ldquo;citogenesis,&rdquo; circular reporting is one of Wikipedia&rsquo;s deadliest flaws. Sometimes, journalists will pull content from Wikipedia articles to use in their news articles, then at some point the articles written by those same journalists will be considered &ldquo;reliable sources,&rdquo; and then <i>those news articles get used as references on those same (or related) Wikipedia articles.</i> Since errors can easily get laundered into a false consensus, Wikipedia and the sources it cites become locked in an infinite loop of self-validation, and media activists and malicious actors can completely fabricate events and viewpoints using this vulnerability.</p>
                </li>
                <li>
                    <p><strong>False balance:</strong></p>
                    <p>The &ldquo;undue weight&rdquo; policy is supposed to prevent minority views from being given disproportionate coverage, and in principle this is an excellent goal. But the policy is calibrated to the balance of <i>source coverage,</i> not to the balance of <i>actual evidence</i>. In fields like STEM, where the actual evidence points unanimously in one direction, secondary sources&rsquo; coverage is almost always heavily mixed, so the policy produces the exact failure it was designed to prevent. Wikipedia articles routinely present near-unanimous consensus or facts, even very obvious ones, as though it were an ongoing debate, or treat well-established findings as one perspective among many, because many contrarian sources exist and the policy has no failsafes for recognising and filtering out contrarian sources that are wrong or outdated. All of this severely misleads readers about the actual state of things.</p>
                </li>
                <li>
                    <p><strong>No mechanisms for reliably and fairly weighing the quality of sources:</strong></p>
                    <p>On Wikipedia, a review in a mid-tier journal written in the 1950s, meta-analysis in a top-tier journal written ten years ago, news article written five years ago, research paper or other primary publication released this year, and even some random person&rsquo;s blog (in some cases) would all carry roughly equal weight under their sourcing policies, provided all of them can be considered &ldquo;reliable.&rdquo; But when sources are weighed to determine which ones are &ldquo;better&rdquo; or &ldquo;more reliable,&rdquo; the outcome is often decided by what, or how many, users voted or participated in relevant discussions, or by whatever agendas are being pushed by the self-appointed Wiki-lawyers or Wiki-police who have monopolised certain articles (and, in some cases, the policies governing them*) into their own personal fiefdom, not by any epistemic standard.</p>
                </li>
            </ul>

            <p>These failure modes are the direct consequences of the core content policies institutionalising at least four fallacies as the operating logic of the entire encyclop&aelig;dia:</p>

            <ol>
                <li>
                    <p><strong>Appeal to majority:</strong></p>
                    <p>This is the most obvious one: all of their core content policies rest on an extremely shaky premise, which is the idea that whatever most sources do is what Wikipedia should do. Their &ldquo;undue weight&rdquo; provision requires content to reflect the balance of coverage in reliable sources, but fails to distinguish between a majority that reflects standards or expert consensus and a majority that reflects propagated error.</p>
                </li>
                <li>
                    <p><strong>Appeal to authority:</strong></p>
                    <p>On any topic that is controversial or involves an incorrect majority, sources in qualifying venues are often immediately treated as authoritative on the topic, regardless of whether or not they are actually correct.</p>
                </li>
                <li>
                    <p><strong>Irrelevant conclusion:</strong></p>
                    <p>Substantive challenges to inaccuracies in article content are routinely dodged by more emotionally invested users automatically attempting to redirect conversations to the procedural question of how much or little the challenges comply with Wikipedia&rsquo;s policies, rather than to the more important question of how accurate or not the sources themselves are.</p>
                </li>
                <li>
                    <p><strong>Reverse onus:</strong></p>
                    <p>When the majority of sources covering a particular topic are wrong, Wikipedia&rsquo;s policies will attempt to push the burden of proof onto anyone attempting to make corrections, under the incorrect and deeply misleading assumption that the people defending the majority viewpoint somehow hold the default position.</p>
                </li>
            </ol>
        </li>
        <li>
            <p><strong>&ldquo;Dispute resolution&rdquo; is an arms race.</strong></p>
            <p>At first glance, Wikipedia&rsquo;s dispute resolution process (<a href="https://en.wikipedia.org/wiki/Wikipedia:Dispute_resolution">WP:DR</a>) looks like an excellent framework for resolving disagreements between users. In practice, however, you will find that it is actually a graduated escalation ladder&mdash;talk page discussions, requests for comment, noticeboards, mediation, and arbitration&mdash;where each successively higher rung is an increasingly exhausting and aggressive contest of time, bureaucratic skill, and sheer emotional endurance that decides the winners based on whoever is most willing to keep investing, and rarely by whoever is the most grounded in reality.</p>

            <p>Even if someone is completely unable to wield Wikipedia&rsquo;s policies and years upon years of arbitration and bureaucracy as weapons, they can still win, as long as they don&rsquo;t do anything genuinely illegal&mdash;again, not because they were the most correct, but because they <i>outlasted</i> everyone else, regardless of how right or wrong anyone involved actually was.</p>
        </li>
    </ol>
    <hr />
    <p>*&nbsp;Some very important policies in certain areas are really, really bad.** A good example is <a href="https://en.wikipedia.org/wiki/MOS:COMPUNITS">MOS:COMPUNITS</a>, a policy that governs articles on computers by, in practice, forcing users to use the obsolete &ldquo;customary&rdquo; convention of using SI prefixes (&ldquo;KB,&rdquo; &ldquo;MB,&rdquo; &ldquo;GB,&rdquo; etc.) for binary (power of 1,024) values when the majority of &ldquo;reliable&rdquo; sources do so, while prohibiting the use of the modern standard terminology (SI prefixes for powers of 1,000) or clearer IEC prefixes (&ldquo;KiB,&rdquo; &ldquo;MiB,&rdquo; &ldquo;GiB,&rdquo; etc.) unless the majority of sources use them that way. This policy completely inverts the entire reason standards exist, and has tarnished so many articles that it desperately needs a complete rewrite from scratch. But this is the policy governing units of bits and bytes&mdash;as such, it affects thousands of articles, involving an enormous topic, an enormous industry, and an awful lot of people with an awful lot invested. Fixing even one article that uses the &ldquo;customary&rdquo; convention or editing just one paragraph of this policy in any way are both grounds for a major conflict akin to a second United States Civil War. Fixing <i>every single article</i> on Wikipedia that does this <i>and</i> rewriting the whole policy from scratch? Forget it. ${desc_x}</p><br />

    <p>**&nbsp;Explanations:</p>

    <p>MOS:COMPUNITS claims that the SI prefixes are &ldquo;ambiguous in usage.&rdquo; While that is true among companies and many people, it is not true among the standards published by standards bodies. The SI prefixes mean powers of 1,000 and <i>not powers of 1,024</i>, while the IEC binary prefixes (KiB, MiB, GiB, TiB, etc.) mean powers of 1,024. This has been the internationally-accepted position since 1998, when the IEC first released their standard on the binary prefixes, and (most) competent experts in computing will use these terms correctly and support their correct usage.</p>

    <p>However, the industry was sloppy for a very long time: back in the early days of computing, storage and memory sizes were relatively small, so professionals in the industry could get away with calling &ldquo;KB&rdquo; 1,024 and &ldquo;MB&rdquo; 1,048,576, instead of 1,000 and 1,000,000. But as storage increased in size and density, and became more accessible to the general public, this difference of 2.4% between a KB and KiB and 4.9% between a MB and MiB, grows to 7.4% for GB vs. GiB, 10% for TB vs TiB, and 12.6% for PB vs. PiB.</p>

    <p>Many hard drive manufacturers, however, advertised their storage capacities using 1,000-based units, and they were actually using the terminology correctly. When professionals in the industry saw this, they chose to accuse storage manufacturers of deliberately deceiving customers, using them as a convenient scapegoat, rather than recognising and correcting their own longstanding misuse of the prefixes, a largely dishonest framing that persists even to this day. Even if the storage manufacturers using 1,000-based units <i>were</i> trying to scam customers, <i>they (mostly) spoke the truth</i> when it came to capacities.</p>

    <p>The practical result is that the customary convention is still deeply entrenched nowadays, and whether the SI prefixes mean powers of 1,000 or 1,024 depends on what you&rsquo;re reading. On Wikipedia, they do this as well, and by doing so they are perpetuating a long-standing malpractice.</i></p>

    <p>And as if this wasn&rsquo;t already bad enough, there are <b><i>17 pages</i></b> of arguments involving people trying to get the community to fix this policy, bringing forth all sorts of perfectly valid concerns (including the ones I brought up), only to end up drowning in cult-like procedural resistance and condescension from people more interested in defending rules than actually engaging with any of our concerns, and I believe that the number of additional times this has happened since the 17<sup>th</sup> archive, including the argument I had, could easily make up another page. MOS:COMPUNITS in its current form institutionalises at least <i>five additional</i> logical fallacies on top of the ones mentioned above:</p>

    <ol start="5">
        <li>
            <p><strong>Appeal to tradition:</strong></p>
            <p>The policy makes the implicit argument that, since the customary convention has been in use for decades, that alone somehow makes it legitimate. In the arguments found in the talk page archives, gatekeepers constantly try to present &ldquo;the industry simply did not embrace the IEC prefixes&rdquo; as a conclusion, instead of acknowledging it as a problem that needs to be addressed.</p>
        </li>
        <li>
            <p><strong>Appeal to nature:</strong></p>
            <p>The policy implies that, since the industry <i>does</i> behave a particular way, they <i>should.</i> The critical distinction between &ldquo;is&ldquo; and &ldquo;ought&ldquo; is entirely (and deliberately) omitted.</p>
        </li>
        <li>
            <p><strong>Appeal to consequences:</strong></p>
            <p>The policy consistently attempts to prevent people from overcoming familiarity bias by attempting to use the unfamiliarity of the IEC prefixes as a reason to avoid them, when an encyclop&aelig;dia&rsquo;s entire purpose is to inform readers of things, even if they do not already know about them. If anything, the lack of familiarity with the IEC binary prefixes is actually an argument <i>in favour of</i> using (and explaining) them, not against it.</p>
        </li>
        <li>
            <p><strong>False equivalence:</strong></p>
            <p>The policy treats the customary convention&mdash;an informal industry hack&mdash;as being equal (even if only roughly so) to internationally-ratified standards backed by the IEC, ISO, BIPM, and NIST. <i>The entire reason why standards and standards bodies exist is to ensure consistency in how terms are defined and used,</i> and the use of SI prefixes for powers of 1,024 instead of 1,000 by computing &ldquo;professionals&rdquo; goes against these goals.</p>
        </li>
    </ol>

    <p>I&rsquo;ve seen many people say that the last point would be an appeal to authority, but that&rsquo;s merely a red herring masquerading as neutrality. Citing the IEC, ISO, BIPM, or NIST on what a standardised unit means is not an appeal to an irrelevant authority; these are the exact institutions whose entire purpose is to answer precisely this kind of question. Saying &ldquo;citing the IEC&rsquo;s definition of a kilobyte is just an appeal to authority&rdquo; is like saying that it&rsquo;s an appeal to authority to cite the Oxford English Dictionary on what a word means.</p>

    <p><b>(Apart from all of this, there is a deeper and much more disturbing failure I&rsquo;ve observed: Although engineers and programmers are supposed to be mature adults who prioritise facts and accuracy over comfort, the way a shocking number of them have responded to this particular issue has been <i>completely unprofessional</i>&mdash;goalpost-shifting, superiority complexes, motivational projection, and an extremely irrational insistence that entrenched bad practice is somehow more legitimate than the standards that exist to correct it. Even though engineers and other professionals who work with computers and their software know more about computing than standards bodies do, technical people, especially engineers, are supposed to hold the line on accuracy and precision even when non-technical people are content with approximation, and statements such as &ldquo;the industry does it this way&rdquo; should be immediately recognisable as fallacious when the industry is doing it wrong. Yet far too many of these people have abandoned this role by not merely accepting an outdated convention, but also, by actively producing sophisticated-sounding arguments in its defence. <i>This whole saga is a massive, brazen &ldquo;FUCK YOU&rdquo; to the entire reason why engineering exists, and to even basic intellectual honesty and professionalism.</i>)</b></p>

    <hr />

    <p><strong>END RESULT:</strong> I created a Wikipedia account in 2017, and had a mostly good time editing for the next seven years. But in 2024, after discovering this policy, trying to bring my concerns to the community, being completely stonewalled like everyone else, and finding out that Wikipedia&rsquo;s problems run far deeper than I initially thought, I ended up abandoning my account entirely, and have no intention of ever returning. What ended up happening, to myself and everyone else that tried to get MOS:COMPUNITS fixed, is that all of us almost got our accounts banned, because the community kept projecting their own pedantry, elitism, and emotional obsession onto us by twisting our criticisms, most of which were entirely truthful and necessary, into evidence that we were somehow contrarians whose only motivation was being different for its own sake. The way Wikipedia and its moderators judge sources and users editing it basically means that a thousand users armed with an industry&rsquo;s beliefs and a majority of sources that mirror those beliefs will automatically be considered more reliable than someone like me who knows what they do and can see past all the bullshit, going in and updating articles to reflect modern standards&NoBreak;&mdash;and while it is entirely possible for you to be revolutionary, the persistence and effort needed is so astronomical that the people who have succeeded at this, while also having a meaningful job, life, or sense of proportion, are extremely few and far between. So we end up with thousands of live articles about computers using conventions that are technically &ldquo;verifiable&rdquo; under Wikipedia&rsquo;s narrow definition of that term but obsolete in essentially every sense that matters, and as bad as this is, this problem is just one relatively small example out of countless others.</p>

    <p>Between the misinformation, poor policies, poor choices of sources, and (in some cases) entire sections that don&rsquo;t belong or are wholly misleading, there&rsquo;s not a huge amount to salvage on Wikipedia that can&rsquo;t be found elsewhere, because even in STEM subjects, there are times where they manage to get even definite, capital-F Facts and Formul&aelig; wrong.</p>
    `;
    bq.innerHTML = `<p>${desc_x}</p>`;
})();
