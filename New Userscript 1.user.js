// ==UserScript==
// @name         New Userscript 1
// @namespace    http://tampermonkey.net/
// @version      2026-04-18
// @description  Elaborate on bullet points by user
// @author       You
// @match        *://old.reddit.com/r/explainlikeimfive/comments/3ye7j7/eli5why_is_wikipedia_considered_unreliable_yet/
// @icon         http://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    let comment = document.querySelectorAll("div.usertext-body.md-container > div")[3];
    let bq = document.querySelectorAll("blockquote")[0];
    let current_year = (new Date()).getFullYear();
    let desc_x = "Your right to edit Wikipedia by swinging your hammer ends at the nose of some wack nerd who is more willing to waste everyone&rsquo;s time and effort in edit wars than you. If you do not have the tenacity of someone with nothing left to lose and nothing else to do in their life, you won&rsquo;t (and can&rsquo;t) win, no matter how right or wrong you are.";

    comment.innerHTML = `
    <p><span style="background-color: yellow;">I agree with this poster, I just wanted to expand that the combination of editor bias and bad summaries of sources together (rather than in isolation) are the biggest reasons the site is unreliable. A lot of Wikipedians have their own pet sources they like; often times they haven&rsquo;t gone to the library lately, and many sources (both in print and online) have not been updated or synthesised with the current beliefs on things, so many articles end up being more representative of whatever sources were available to the editors who last touched them, and not necessarily of everything available.</span></p>

    <p><span style="background-color: yellow;">There are three massive obstacles that are almost guaranteed to eventually drive away anyone who&rsquo;s dumb enough to attempt editing Wikipedia in a serious and constructive manner:</span></p>

    <ol>
        <li>
            <p><span style="background-color: yellow;"><strong>Their sourcing policies systematically separate claims from evidence:</strong></span></p>
            <p>Wikipedia explicitly gives an <span style="background-color: yellow;">extremely strong</span> preference for <span style="background-color: yellow;">secondary, tertiary, etc.</span> sources and recently published accounts <span style="background-color: yellow;">over primary sources, regardless of the topic.</span> Both of these <span style="background-color: yellow;">effectively</span> equate to a requirement that the documentation be as distant as possible from the actual evidence. That is the exact opposite of what an expert will do, so experts are effectively prohibited from using good practice. While Wikipedia&rsquo;s policies do not forbid directly citing primary sources, some policies do firmly declare, for example, <a href="https://en.wikipedia.org/wiki/Wikipedia:No_original_research#Primary,_secondary_and_tertiary_sources"><i>&ldquo;<b>do not</b> analyze, synthesize, interpret, or evaluate material found in a primary source yourself; instead, refer to reliable secondary sources that do so.&rdquo;</i></a> This is the opposite of what experts actually do.</p>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>Their core content policies are an appeal to majority:*</strong></span></p>
            <p><span style="background-color: yellow;">If you look at their policy on &ldquo;Verifiability,&rdquo; you&rsquo;ll see that their threshold for inclusion is whether or not it can be &ldquo;verified&rdquo; by &ldquo;reliable&rdquo; sources, not about whether or not it is true. So if, for example, 80% or more of &ldquo;reliable&rdquo; secondary (and beyond) sources repeat a flawed account of something, Wikipedia will perpetuate that, because content that states what is the most true or accurate will be a minority viewpoint, and it will fail verification because prioritising it will be considered &ldquo;giving it undue weight.&rdquo; This creates even more room for error:</span></p>
            <ul>
                <li>
                    <p><span style="background-color: yellow;"><strong>Textbook lag:</strong></span></p>
                    <p><span style="background-color: yellow;">Even in the hard maths and sciences, widely-used media outlets, websites, and textbooks often contain statements and conventions that are oversimplified or outright wrong, that have been propagated for a long time.* Textbooks are especially problematic, as they often lag behind the most up-to-date research by 10 years or more. Despite this, Wikipedia&rsquo;s sourcing policies work against editors trying to reflect current consensus among experts by citing papers and other primary sources directly, so they often lose to those citing popular websites and news articles.</span></p>
                </li>
                <li>
                    <p><span style="background-color: yellow;"><strong>Circular reporting:</strong></span></p>
                    <p><span style="background-color: yellow;">Also known as &ldquo;citogenesis,&rdquo; circular reporting on Wikipedia happens when journalists cite a Wikipedia article, then at some point the journalists&rsquo; articles are considered &ldquo;reliable sources,&rdquo; and then <i>those news articles get used as a reference on that Wikipedia article.</i> Since any errors that get caught in this can easily get laundered into a false consensus, media activists can (and have already) completely manufacture events and viewpoints using this vulnerability. But as well-known as this problem is, even within Wikipedia itself, their policies don&rsquo;t do a good job of preventing or deterring it, and the community don&rsquo;t seem to care that much.</span></p>
                </li>
                <li>
                    <p><span style="background-color: yellow;"><strong>No mechanisms for reliably weighing the quality of sources:</strong></span></p>
                    <p><span style="background-color: yellow;">On Wikipedia, a review article in a mid-tier journal written in 2003 and a meta-analysis in a top-tier journal written in ${current_year} would carry roughly equal weight under their sourcing policies, provided both can be considered &ldquo;reliable.&rdquo; But when editors try to weigh which sources are &ldquo;better&rdquo; or &ldquo;more reliable,&rdquo; the outcome is often decided by what, or how many, editors voted or participated in relevant discussions, not by any epistemic standard.</span></p>
                </li>
            </ul>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>&ldquo;Dispute resolution&rdquo; is an arms race:</strong></span></p>
            <p>Bureaucracy and edit wars are won by <span style="background-color: yellow;">those who are most familiar with years of rules and arbitration, or who are most willing to waste others&rsquo; time, and rarely by those who are the</span> most correct.</p>
        </li>
    </ol>
    <hr />
    <p><span style="background-color: yellow;">*&nbsp;Some important policies in certain areas are really, really, really bad. MOS:COMPUNITS is an excellent example of this:</span>

    <p><span style="background-color: yellow;">MOS:COMPUNITS is a policy that is part of Wikipedia&rsquo;s Manual of Style, which governs articles about computers by telling users how file size units should be written: whether the SI units for bytes (&ldquo;kilobyte,&rdquo; &ldquo;megabyte,&rdquo; &ldquo;gigabyte,&rdquo; etc.) mean powers of 1,000 or 1,024.</span></p>

    <p><span style="background-color: yellow;">The modern standard answer to this question is <i>not ambiguous:</i> The SI prefixes (KB, MB, GB, TB etc.) mean powers of 1,000 and <i>not powers of 1,024.</i> The IEC binary prefixes (KiB, MiB, GiB, TiB, etc.) mean powers of 1,024. This has been the internationally-accepted position since 1998, when the IEC first released their standard on the binary prefixes, and competent experts in computing will use these terms correctly and advocate for their correct usage.</span></p>

    <p><span style="background-color: yellow;">However, the industry was sloppy for a very long time: back in the early days of computing, storage and memory sizes were relatively small, so professionals in the industry could get away with calling &ldquo;KB&rdquo; 1,024 and &ldquo;MB&rdquo; 1,048,576, instead of 1,000 and 1,000,000. But as storage increased in size and density, and became more accessible to the general public, this difference of 2.4% between a KB and KiB and 4.9% between a MB and MiB, grows to 7.4% for GB vs. GiB, 10% for TB vs TiB, and 12.6% for PB vs. PiB.</span></p>

    <p><span style="background-color: yellow;">Many hard drive manufacturers, however, advertised their storage capacities using 1,000-based units, and they were actually using the terminology correctly. When professionals in the industry saw this, they chose to accuse storage manufacturers of deliberately deceiving customers, using them as a convenient scapegoat, rather than recognising and correcting their own longstanding misuse of the prefixes, a largely dishonest framing that persists even to this day. Even if the storage manufacturers using 1,000-based units <i>were</i> trying to scam customers, <i>they (mostly) spoke the truth</i> when it came to capacities.</span></p>

    <p><span style="background-color: yellow;">(What is just as problematic is the fact that, although engineers and programmers are supposed to be mature adults who prioritise facts over feelings, responses by so many of these &ldquo;professionals&rdquo; to this particular issue have frequently been of dismissiveness, blame-shifting, God complexes, and an extremely irrational and stubborn insistence that entrenched bad practice is somehow more legitimate than standards that exist precisely to ensure consistency and fix bad practices, because they think that knowing more about computing than standards bodies do somehow makes them untouchable.)</span></p>

    <p><span style="background-color: yellow;">The practical result is that whether the SI prefixes mean powers of 1,000 or 1,024 depends on which article you&rsquo;re reading. This is not a neutral reflection of source usage. Wikipedia has always been infamous for being unreliable, since allowing anyone to edit inherently makes it vulnerable to vandalism and disruptive editing, which constantly requires editors to make corrections. But another part of this is that, ironically, <i>many of their policies <b>prevent</b> people from being able to make factual corrections.</i></span></p>

    <p><span style="background-color: yellow;">And as if this wasn&rsquo;t already bad enough, there are <b><i>17 pages</i></b> of arguments involving people trying to get the community to fix this policy, bringing forth all sorts of perfectly valid concerns (including the ones I brought up), only to end up drowning in cult-like procedural resistance and condescension from people more interested in defending rules than actually engaging with any of our concerns, and I believe that the number of additional times this has happened since the 17<sup>th</sup> archive, including the argument I had, could easily make up another page. MOS:COMPUNITS in its current form institutionalises many logical fallacies at once:</span></p>

    <ol>
        <li>
            <p><span style="background-color: yellow;"><strong>Appeal to majority:</strong></span></p>
            <p><span style="background-color: yellow;">This is the most obvious one: As with all of their core content policies, the entire premise of this policy in its current form rests on the idea that whatever most sources do is what Wikipedia should do. They don&rsquo;t care to distinguish between a majority that is correct and a majority that is merely entrenched.</span></p>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>Appeal to tradition:</strong></span></p>
            <p><span style="background-color: yellow;">The implicit argument here is that, since the customary convention has been in use for decades, that alone somehow makes it legimitate. In the arguments found in the talk page archives, the community constantly tries to present &ldquo;the industry simply did not embrace the IEC prefixes&rdquo; as a conclusion, instead of acknowledging it as a problem that needs to be addressed.</span></p>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>Naturalistic fallacy:</strong></span></p>
            <p><span style="background-color: yellow;">&ldquo;The industry <i>does</i> behave this way, therefore they <i>should.</i>&rdquo; The critical distinction needed between &ldquo;is&ldquo; and &ldquo;ought&ldquo; is entirely (and deliberately) omitted here.</span></p>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>Red herring:</strong></span></p>
            <p><span style="background-color: yellow;">The community consistently attempts to prevent people from overcoming familiarity bias by attempting to use the unfamiliarity of the IEC prefixes as a reason to avoid them, when an encyclopedia&rsquo;s entire purpose is to inform readers of things, even if they do not already know about it. If anything, the lack of familiarity with the IEC binary prefixes is actually an argument <i>in favour of</i> using (and explaining) them, not against it.</span></p>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>False equivalence:</strong></span></p>
            <p><span style="background-color: yellow;">The policy treats the customary convention&mdash;an informal, improper industry hack&mdash;as being equal (even if only roughly so) to internationally-ratified standards backed by the IEC, ISO, BIPM, and NIST. <i>The entire reason why standards and standards bodies exist is to ensure consistency in how terms are defined and used,</i> and the use of SI prefixes for powers of 1,024 instead of 1,000 by computing &ldquo;professionals&rdquo; goes against these goals.</span></p>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>Reverse onus:</strong></span></p>
            <p><span style="background-color: yellow;">The community attempts to push the burden of proof onto those who want to use the modern standard terminology, under the dangerously incorrect and misleading assumption that defenders of the customary convention somehow hold the default position.</span></p>
        </li>
    </ol>

    <p><span style="background-color: yellow;">MOS:COMPUNITS in its current form is so ass-backwards that it desperately needs to be completely rewritten from scratch. But this is about articles on computers&mdash;an enormous topic, involving an enormous industry, and one where an enormous number of people have an enormous amount invested. Even <i>attempting</i> to challenge this policy in absolutely any legitimate way whatsoever is grounds for a major armed conflict akin to a second United States Civil War. Rewriting the whole thing from scratch? Forget it. ${desc_x}</span></p>

    <hr />

    <p><span style="background-color: yellow;"><strong>END RESULT:</strong> I created a Wikipedia account in 2017, and had a mostly good time editing for the next seven years. But in 2024, after discovering this policy, trying to bring my concerns to the community, being completely stonewalled like everyone else, and finding out that Wikipedia&rsquo;s problems run far deeper than I initially thought, I ended up abandoning my account entirely, and have no intention of ever returning. What ended up happening, to myself and everyone else that tried to get MOS:COMPUNITS fixed, is that all of us almost got our accounts banned, despite most our criticisms being completely truthful and necessary. Because, for any given convention, no matter how right or wrong it is or how much or little sense it makes, if it&rsquo;s been done that way for a long time and you change it, there&rsquo;s almost certainly going to be people who will think you&rsquo;re a contrarian who just wants to be crazy or different for its own sake, instead of someone bringing up a valid technical concern, and that&rsquo;s exactly how the community viewed us. The way Wikipedia and their model works means that a thousand editors armed with an industry&rsquo;s beliefs and a majority of sources that mirror those beliefs, even if among those beliefs is a long-standing, completely unjustifiable resistance towards correcting broken practices, will somehow be considered more reliable than 10 or so people like me, approaching the question with no axe to grind, and who actually care about accuracy and consistency, going in and redoing things to modern factual standards. And if you try to be revolutionary, you won&rsquo;t win the arbitration process. So we end up with thousands of articles about computers that use a convention which is well-sourced and widely verifiable, but entirely obsolete, and MOS:COMPUNITS is just one small example out of countless other problems that Wikipedia has.</span></p>

    <p>Between the misinformation, <span style="background-color: yellow;">poor policies,</span> poor choices of sources, and <span style="background-color: yellow;">(in some cases)</span> entire sections that don&rsquo;t belong or are wholly misleading, there&rsquo;s not a huge amount to salvage on Wikipedia, <span style="background-color: yellow;">because even in the hard maths and sciences, there are times where they manage to royally fuck up even</span> definite, capital-F Facts and <span style="background-color: yellow;">Formulæ.</span></p>
    `;
    bq.innerHTML = `<p><span style="background-color: yellow;">${desc_x}</span></p>`;
})();
