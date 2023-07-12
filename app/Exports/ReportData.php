<?php
namespace App\Exports;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\FromView;

class ReportData implements FromView, ShouldAutoSize
{
    use Exportable;
// 
    private  $UgacS;
    private $UgacN ;
    private $AnnafunanE ;
    private $AnnafunanW ;
    private $AtulayanN ;
    private $AtulayanS ;
    private $Bagay ;
    private $Buntun ;
    private $Caggay ;
    private $Capatan ;
    private $CarigN ;
    private $CarigS ;
    private $CaritanC ;
    private $CaritanN ;
    private $CaritanS ;
    private $CataggamanN ;
    private $CataggamanP ;
    private $CataggamanV ;
    private $Centro1 ;
    private $Centro2 ;
    private $Centro3 ;
    private $Centro4 ;
    private $Centro5 ;
    private $Centro6 ;
    private $Centro7 ;
    private $Centro8 ;
    private $Centro9 ;
    private $Centro10 ;
    private $Centro11 ;
    private $Centro12 ;
    private $Dadda ;
    private $GosiN ;
    private $GosiS ;
    private $LarionA ;
    private $LarionB ;
    private $Leonarda ;
    private $LibagN ;
    private $LibagS ;
    private $LinaoE ;
    private $LinaoN ;
    private $LinaoW ;
    private $NambbalanN ;
    private $NamabbalanS ;
    private $PalluaN ;
    private $PalluaS ;
    private $Pengue ;
    private $Reyes ;
    private $SanGabriel ;
    private $Tagga ;
    private $Tanza ;
// 
    private  $UgacS1;
    private $UgacN1 ;
    private $AnnafunanE1 ;
    private $AnnafunanW1 ;
    private $AtulayanN1 ;
    private $AtulayanS1 ;
    private $Bagay1 ;
    private $Buntun1 ;
    private $Caggay1 ;
    private $Capatan1 ;
    private $CarigN1 ;
    private $CarigS1 ;
    private $CaritanC1 ;
    private $CaritanN1 ;
    private $CaritanS1 ;
    private $CataggamanN1 ;
    private $CataggamanP1;
    private $CataggamanV1 ;
    private $Centro1q ;
    private $Centro2q ;
    private $Centro3q ;
    private $Centro4q ;
    private $Centro5q ;
    private $Centro6q ;
    private $Centro7q ;
    private $Centro8q ;
    private $Centro9q ;
    private $Centro10q ;
    private $Centro11q ;
    private $Centro12q ;
    private $Dadda1 ;
    private $GosiN1 ;
    private $GosiS1 ;
    private $LarionA1 ;
    private $LarionB1 ;
    private $Leonarda1 ;
    private $LibagN1 ;
    private $LibagS1 ;
    private $LinaoE1 ;
    private $LinaoN1 ;
    private $LinaoW1 ;
    private $NambbalanN1 ;
    private $NamabbalanS1 ;
    private $PalluaN1 ;
    private $PalluaS1 ;
    private $Pengue1 ;
    private $Reyes1 ;
    private $SanGabriel1 ;
    private $Tagga1 ;
    private $Tanza1 ;
// 
private  $UgacSt;
private $UgacNt ;
private $AnnafunanEt ;
private $AnnafunanWt ;
private $AtulayanNt ;
private $AtulayanSt ;
private $Bagayt ;
private $Buntunt ;
private $Caggayt ;
private $Capatant ;
private $CarigNt ;
private $CarigSt ;
private $CaritanCt ;
private $CaritanNt ;
private $CaritanSt ;
private $CataggamanNt ;
private $CataggamanPt ;
private $CataggamanVt ;
private $Centro1t ;
private $Centro2t ;
private $Centro3t ;
private $Centro4t ;
private $Centro5t ;
private $Centro6t ;
private $Centro7t ;
private $Centro8t ;
private $Centro9t ;
private $Centro10t ;
private $Centro11t ;
private $Centro12t ;
private $Daddat ;
private $GosiNt ;
private $GosiSt ;
private $LarionAt ;
private $LarionBt ;
private $Leonardat ;
private $LibagNt ;
private $LibagSt ;
private $LinaoEt ;
private $LinaoNt ;
private $LinaoWt ;
private $NambbalanNt ;
private $NamabbalanSt ;
private $PalluaNt ;
private $PalluaSt ;
private $Penguet ;
private $Reyest ;
private $SanGabrielt ;
private $Taggat ;
private $Tanzat ;

    public function __construct()
    {
        
        $this -> UgacS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> UgacN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> AnnafunanE = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan East")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> AnnafunanW = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan West")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> AtulayanN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> AtulayanS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Bagay = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Bagay")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Buntun = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Buntun")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Caggay = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caggay")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Capatan = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Capatan")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> CarigN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> CarigS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> CaritanC = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Centro")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> CaritanN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> CaritanS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> CataggamanN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Nuevo")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> CataggamanP = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Pardo")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> CataggamanV = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Viejo")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 1")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro2 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 2")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro3 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 3")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro4 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 4")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro5 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 5")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro6 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 6")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro7 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 7")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro8 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 8")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro9 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 9")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro10 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 10")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro11 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 11")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Centro12 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 12")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Dadda = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Dadda")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> GosiN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> GosiS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> LarionA = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Alto")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> LarionB = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Bajo")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Leonarda = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Leonarda")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> LibagN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> LibagS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> LinaoE = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> LinaoN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> LinaoW = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao West")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> NambbalanN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Nambbalan Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> NamabbalanS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Namabbalan Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> PalluaN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> PalluaS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Pengue = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pengue")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Reyes = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Reyes")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> SanGabriel = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "San Gabriel")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Tagga = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tagga")
        ->where('reportType', '=', "Crime")
        ->count();
        $this -> Tanza = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tanza")
        ->where('reportType', '=', "Crime")
        ->count();

        // INCIDENT

        $this -> UgacS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> UgacN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> AnnafunanE1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan East")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> AnnafunanW1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan West")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> AtulayanN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> AtulayanS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Bagay1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Bagay")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Buntun1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Buntun")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Caggay1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caggay")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Capatan1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Capatan")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> CarigN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> CarigS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> CaritanC1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Centro")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> CaritanN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> CaritanS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> CataggamanN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Nuevo")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> CataggamanP1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Pardo")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> CataggamanV1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Viejo")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro1q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 1")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro2q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 2")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro3q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 3")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro4q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 4")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro5q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 5")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro6q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 6")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro7q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 7")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro8q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 8")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro9q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 9")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro10q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 10")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro11q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 11")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Centro12q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 12")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Dadda1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Dadda")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> GosiN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> GosiS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> LarionA1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Alto")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> LarionB1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Bajo")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Leonarda1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Leonarda")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> LibagN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> LibagS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> LinaoE1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> LinaoN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> LinaoW1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao West")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> NambbalanN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Nambbalan Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> NamabbalanS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Namabbalan Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> PalluaN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> PalluaS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Pengue1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pengue")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Reyes1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Reyes")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> SanGabriel1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "San Gabriel")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Tagga1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tagga")
        ->where('reportType', '=', "Incident")
        ->count();
        $this -> Tanza1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tanza")
        ->where('reportType', '=', "Incident")
        ->count();

        // TOTAL CRIME N INCIDENT
        $this -> UgacSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Sur")

        ->count();
        $this -> UgacNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Norte")

        ->count();
        $this -> AnnafunanEt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan East")

        ->count();
        $this -> AnnafunanWt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan West")

        ->count();
        $this -> AtulayanNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Norte")

        ->count();
        $this -> AtulayanSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Sur")

        ->count();
        $this -> Bagayt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Bagay")

        ->count();
        $this -> Buntunt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Buntun")

        ->count();
        $this -> Caggayt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caggay")

        ->count();
        $this -> Capatant = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Capatan")

        ->count();
        $this -> CarigNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Norte")

        ->count();
        $this -> CarigSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Sur")

        ->count();
        $this -> CaritanCt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Centro")

        ->count();
        $this -> CaritanNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Norte")

        ->count();
        $this -> CaritanSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Sur")

        ->count();
        $this -> CataggamanNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Nuevo")

        ->count();
        $this -> CataggamanPt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Pardo")

        ->count();
        $this -> CataggamanVt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Viejo")

        ->count();
        $this -> Centro1t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 1")

        ->count();
        $this -> Centro2t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 2")

        ->count();
        $this -> Centro3t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 3")

        ->count();
        $this -> Centro4t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 4")

        ->count();
        $this -> Centro5t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 5")

        ->count();
        $this -> Centro6t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 6")

        ->count();
        $this -> Centro7t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 7")

        ->count();
        $this -> Centro8t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 8")
        ->count();
        $this -> Centro9t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 9")

        ->count();
        $this -> Centro10t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 10")

        ->count();
        $this -> Centro11t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 11")

        ->count();
        $this -> Centro12t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 12")

        ->count();
        $this -> Daddat = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Dadda")

        ->count();
        $this -> GosiNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Norte")

        ->count();
        $this -> GosiSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Sur")

        ->count();
        $this -> LarionAt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Alto")

        ->count();
        $this -> LarionBt= DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Bajo")

        ->count();
        $this -> Leonardat = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Leonarda")

        ->count();
        $this -> LibagNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Norte")

        ->count();
        $this -> LibagSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Sur")

        ->count();
        $this -> LinaoEt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")

        ->count();
        $this -> LinaoNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")

        ->count();
        $this -> LinaoWt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao West")

        ->count();
        $this -> NambbalanNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Nambbalan Norte")

        ->count();
        $this -> NamabbalanSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Namabbalan Sur")

        ->count();
        $this -> PalluaNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Norte")

        ->count();
        $this -> PalluaSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Sur")

        ->count();
        $this -> Penguet = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pengue")

        ->count();
        $this -> Reyest = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Reyes")

        ->count();
        $this -> SanGabrielt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "San Gabriel")

        ->count();
        $this -> Taggat = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tagga")

        ->count();
        $this -> Tanzat = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tanza")
        ->count();

    }
    public function view() : View{

      


        return view('ocirs.excel_view',[
             // Crime
        'UgacS' => $this -> UgacS,
        'UgacN' =>  $this -> UgacN,
        'AnnafunanE' =>  $this -> AnnafunanE,
        'AnnafunanW' =>  $this -> AnnafunanW,
        'AtulayanN' =>  $this -> AtulayanN,
        'AtulayanS' =>  $this -> AtulayanS,
        'Bagay' => $this -> Bagay,
        'Buntun' =>  $this -> Buntun,
        'Caggay' =>  $this -> Caggay,
        'Capatan' =>  $this ->Capatan,
        'CarigN' =>  $this -> CarigN,
        'CarigS' =>  $this -> CarigS,
        'CaritanC' =>  $this -> CaritanC,
        'CaritanN' =>  $this -> CaritanN,
        'CaritanS' =>  $this -> CaritanS,
        'CataggamanN' =>  $this -> CataggamanN,
        'CataggamanP' =>  $this -> CataggamanP,
        'CataggamanV' =>  $this -> CataggamanV,
        'Centro1' =>  $this -> Centro1,
        'Centro2' =>  $this -> Centro2,
        'Centro3' =>  $this -> Centro3,
        'Centro4' =>  $this -> Centro4,
        'Centro5' =>  $this -> Centro5,
        'Centro6' =>  $this -> Centro6,
        'Centro7' =>  $this -> Centro7,
        'Centro8' =>  $this -> Centro8,
        'Centro9' =>  $this -> Centro9,
        'Centro10' =>  $this -> Centro10,
        'Centro11' =>  $this ->Centro11,
        'Centro12' =>  $this -> Centro12,
        'Dadda' =>  $this -> Dadda,
        'GosiN' =>  $this -> GosiN,
        'GosiS' =>  $this -> GosiS,
        'LarionA' =>  $this -> LarionA,
        'LarionB' =>  $this -> LarionB,
        'Leonarda' =>  $this -> Leonarda,
        'LibagN' =>  $this -> LibagN,
        'LibagS' =>  $this -> LibagS,
        'LinaoE' =>  $this -> LinaoE,
        'LinaoN' =>  $this -> LinaoN,
        'LinaoW' =>  $this -> LinaoW,
        'NambbalanN' =>  $this -> NambbalanN,
        'NamabbalanS' =>  $this -> NamabbalanS,
        'PalluaN' =>  $this -> PalluaN,
        'PalluaS' =>  $this -> PalluaS,
        'Pengue' =>  $this -> Pengue,
        'Reyes' => $this ->  Reyes,
        'SanGabriel' =>  $this -> SanGabriel,
        'Tagga' =>  $this -> Tagga,
        'Tanza' =>  $this -> Tanza,

        // INCIDENT
        'UgacS1' =>  $this -> UgacS1,
        'UgacN1' =>  $this -> UgacN1,
        'AnnafunanE1' =>  $this -> AnnafunanE1,
        'AnnafunanW1' =>  $this -> AnnafunanW1,
        'AtulayanN1' =>  $this -> AtulayanN1,
        'AtulayanS1' =>  $this -> AtulayanS1,
        'Bagay1' =>  $this -> Bagay1,
        'Buntun1' =>  $this -> Buntun1,
        'Caggay1' =>  $this -> Caggay1,
        'Capatan1' =>  $this -> Capatan1,
        'CarigN1' =>  $this -> CarigN1,
        'CarigS1' =>  $this -> CarigS1,
        'CaritanC1' =>  $this -> CaritanC1,
        'CaritanN1' =>  $this -> CaritanN1,
        'CaritanS1' =>  $this -> CaritanS1,
        'CataggamanN1' =>  $this -> CataggamanN1,
        'CataggamanP1' =>  $this -> CataggamanP1,
        'CataggamanV1' =>  $this -> CataggamanV1,
        'Centro1q' =>  $this -> Centro1q,
        'Centro2q' =>  $this -> Centro2q,
        'Centro3q' =>  $this -> Centro3q,
        'Centro4q' =>  $this -> Centro4q,
        'Centro5q' =>  $this -> Centro5q,
        'Centro6q' =>  $this -> Centro6q,
        'Centro7q' =>  $this -> Centro7q,
        'Centro8q' =>  $this -> Centro8q,
        'Centro9q' =>  $this -> Centro9q,
        'Centro10q' =>  $this -> Centro10q,
        'Centro11q' =>  $this -> Centro11q,
        'Centro12q' =>  $this -> Centro12q,
        'Dadda1' =>  $this -> Dadda1,
        'GosiN1' =>  $this -> GosiN1,
        'GosiS1' =>  $this -> GosiS1,
        'LarionA1' =>  $this -> LarionA1,
        'LarionB1' =>  $this -> LarionB1,
        'Leonarda1' =>  $this -> Leonarda1,
        'LibagN1' =>  $this -> LibagN1,
        'LibagS1' =>  $this -> LibagS1,
        'LinaoE1' =>  $this -> LinaoE1,
        'LinaoN1' => $this -> LinaoN1,
        'LinaoW1' =>  $this -> LinaoW1,
        'NambbalanN1' =>  $this -> NambbalanN1,
        'NamabbalanS1' =>  $this -> NamabbalanS1,
        'PalluaN1' =>  $this -> PalluaN1,
        'PalluaS1' =>  $this -> PalluaS1,
        'Pengue1' =>  $this -> Pengue1,
        'Reyes1' => $this ->  Reyes1,
        'SanGabriel1' =>  $this -> SanGabriel1,
        'Tagga1' =>  $this -> Tagga1,
        'Tanza1' =>  $this -> Tanza1,

                 // TOTAL 
                 'UgacSt' =>  $this -> UgacSt,
                 'UgacNt' => $this ->  UgacNt,
                 'AnnafunanEt' =>  $this -> AnnafunanEt,
                 'AnnafunanWt' =>  $this -> AnnafunanWt,
                 'AtulayanNt' =>  $this -> AtulayanNt,
                 'AtulayanSt' =>  $this -> AtulayanSt,
                 'Bagayt' =>  $this -> Bagayt,
                 'Buntunt' =>  $this -> Buntunt,
                 'Caggayt' =>  $this -> Caggayt,
                 'Capatant' =>  $this -> Capatant,
                 'CarigNt' =>  $this -> CarigNt,
                 'CarigSt' =>  $this -> CarigSt,
                 'CaritanCt' => $this ->  CaritanCt,
                 'CaritanNt' =>  $this -> CaritanNt,
                 'CaritanSt' => $this ->  CaritanSt,
                 'CataggamanNt' =>  $this -> CataggamanNt,
                 'CataggamanPt' =>  $this -> CataggamanPt,
                 'CataggamanVt' =>  $this -> CataggamanVt,
                 'Centro1t' =>  $this -> Centro1t,
                 'Centro2t' =>  $this -> Centro2t,
                 'Centro3t' => $this ->  Centro3t,
                 'Centro4t' =>  $this -> Centro4t,
                 'Centro5t' => $this ->  Centro5t,
                 'Centro6t' =>  $this -> Centro6t,
                 'Centro7t' =>  $this -> Centro7t,
                 'Centro8t' => $this ->  Centro8t,
                 'Centro9t' =>  $this -> Centro9t,
                 'Centro10t' => $this ->  Centro10t,
                 'Centro11t' =>  $this -> Centro11t,
                 'Centro12t' =>  $this -> Centro12t,
                 'Daddat' =>  $this -> Daddat,
                 'GosiNt' => $this ->  GosiNt,
                 'GosiSt' => $this ->  GosiSt,
                 'LarionAt' => $this ->  LarionAt,
                 'LarionBt' =>  $this -> LarionBt,
                 'Leonardat' =>  $this -> Leonardat,
                 'LibagNt' =>  $this -> LibagNt,
                 'LibagSt' =>  $this -> LibagSt,
                 'LinaoEt' => $this ->  LinaoEt,
                 'LinaoNt' =>  $this -> LinaoNt,
                 'LinaoWt' =>  $this -> LinaoWt,
                 'NambbalanNt' =>  $this -> NambbalanNt,
                 'NamabbalanSt' =>  $this -> NamabbalanSt,
                 'PalluaNt' => $this ->  PalluaNt,
                 'PalluaSt' => $this ->  PalluaSt,
                 'Penguet' =>  $this -> Penguet,
                 'Reyest' => $this ->  Reyest,
                 'SanGabrielt' =>  $this -> SanGabrielt,
                 'Taggat' =>  $this -> Taggat,
                 'Tanzat' =>  $this -> Tanzat,

        ]);
    }

    


}
